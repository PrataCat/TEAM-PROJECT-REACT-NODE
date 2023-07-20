require("dotenv").config();
const { sendEmail } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const CustomError = require("../../helpers/customError");
const User = require("../../models/user");

const { BASE_URL } = process.env;

//* need to check

const resendVerifyEmail = catchAsyncWrapper(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(new CustomError(404, "Email not found"));
  }

  if (user.verify) {
    return next(new CustomError(400, "Verification has already been passed"));
  }

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({
    message: "Verification email sent",
  });
});

module.exports = resendVerifyEmail;
