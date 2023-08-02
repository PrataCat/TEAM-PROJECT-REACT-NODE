const { httpError, catchAsyncWrapper } = require("../../helpers");

const User = require("../../models/user");

const removeFromFavorites = catchAsyncWrapper(async (req, res) => {
  const user = req.user;

  const { noticeId } = req.params;

  if (!user.favorite.includes(noticeId)) {
    throw httpError(404, "Not found");
  }

  await User.findByIdAndUpdate(user._id, {
    $pull: { favorite: noticeId },
  });

  res.json({
    message: "Pet delete success",
  });
});

module.exports = removeFromFavorites;
