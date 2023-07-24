const { httpError, catchAsyncWrapper } = require("../../helpers");

const User = require("../../models/user");

const addToFavorite = catchAsyncWrapper(async (req, res) => {
  const user = req.user;
  const { noticeId } = req.params;

  if (user.favorite.includes(noticeId)) {
    throw httpError(400, "Pet is in favorites");
  }

  const result = await User.findByIdAndUpdate(
    user._id,
    {
      $push: { favorite: noticeId },
    },
    { new: true }
  );

  res.status(201).json(result);
});

module.exports = addToFavorite;

// +