const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const CustomError = require("../../helpers/customError");
const User = require("../../models/user");

//* need to check

const verifyEmail = catchAsyncWrapper(async (req, res, next) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    return next(new CustomError(404, "User not found"));
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: null,
  });

  res.json({
    message: "Verification successful",
  });
});

module.exports = verifyEmail;
