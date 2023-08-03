const { catchAsyncWrapper } = require("../../helpers");

const User = require("../../models/user");

const getFavorites = catchAsyncWrapper(async (req, res) => {
  const { _id } = req.user;

  const { page = 1, perPage = 9 } = req.query;

  const limit = perPage;
  const skip = (page - 1) * limit;

  const noticesAll = await User.findById(_id)
    .populate("favorite")
    .select("favorite -_id");

  const totalNotices = noticesAll.favorite.length;
  const totalPages = Math.ceil(totalNotices / perPage);

  const { favorite } = await User.findById(_id)
    .populate({
      path: "favorite",
      perDocumentLimit: limit,
      options: {
        skip,
      },
    })
    .select("favorite -_id");

  const result = { totalPages, favorite };

  res.json(result);
});

module.exports = getFavorites;
