const { httpError } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/");

const User = require("../../models/user");

const removeFromFavorite = catchAsyncWrapper(async (req, res) => {
  const user = req.user;
  const {noticeId} = req.params;

  if (!user.favorite.includes(noticeId)) {
    throw httpError(404, "Not found");
  }

  await User.findByIdAndUpdate(user._id, {
    $pull: { favorite: noticeId },
  });
  res.status(204).json({
    message: "Pet delete success",
  });
});

module.exports = removeFromFavorite;
