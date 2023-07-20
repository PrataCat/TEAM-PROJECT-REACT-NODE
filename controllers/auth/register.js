const gravatar = require("gravatar");
const { v4 } = require("uuid");

const CustomError = require("../../helpers/customError");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");
const { createHashPass } = require("../../helpers/hashPass");
const { sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

//* need to check

const register = catchAsyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return next(new CustomError(409, "Email in use"));
  }

  const hashPass = await createHashPass(password);
  const avatarURL = gravatar.url(email);
  const verificationToken = v4();

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
});

module.exports = register;
