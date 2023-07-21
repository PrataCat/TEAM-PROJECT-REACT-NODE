const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const CustomError = require("../../helpers/CustomError");
const User = require("../../models/user");

const updateUserAvatar = catchAsyncWrapper(async (req, res, next) => {
  if (!req.file) {
    return next(new CustomError(400, "Missing 'avatar' field"));
  }

  const { _id } = req.user;

  const avatarURL = req.file.path;

  await User.findByIdAndUpdate(_id, { avatar: avatarURL });

  res.json({
    avatar: avatarURL,
  });
});

module.exports = updateUserAvatar;
