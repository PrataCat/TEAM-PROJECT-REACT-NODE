const { httpError } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const verifyEmail = catchAsyncWrapper(async (req, res, next) => {
  const { verificationToken } = req.params;

  const user = await User.findOne({ verificationToken });

  if (!user) {
    return next(httpError(404, "User not found"));
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationToken: "",
  });

  res.redirect(
    "https://vladzhyrnyi.github.io/your-pet-front/login?verified=%22true%22"
  );
});

module.exports = verifyEmail;
