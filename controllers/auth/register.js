const gravatar = require("gravatar");
const { v4 } = require("uuid");

const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");
const { createHashPass } = require("../../helpers/hashPass");
const { sendEmail } = require("../../helpers");

const register = catchAsyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;

  const hashPass = await createHashPass(password);
  const verificationToken = v4();

  const newUser = await User.create({
    ...req.body,
    password: hashPass,
    avatar: gravatar.url(email),
    verificationToken,
  });

  await sendEmail(email, verificationToken);

  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
    message: "Your registration is success",
  });
});

module.exports = register;
