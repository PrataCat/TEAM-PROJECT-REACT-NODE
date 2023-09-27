require("dotenv").config();
const { sendEmail } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const resendVerifyEmail = catchAsyncWrapper(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  await sendEmail(email, user.verificationToken);

  res.json({
    message: "Verification email sent",
  });
});

module.exports = resendVerifyEmail;
