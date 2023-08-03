const { catchAsyncWrapper } = require("../../helpers");

const User = require("../../models/user");

const getFavorites = catchAsyncWrapper(async (req, res) => {
  const { _id } = req.user;

  const { page = 1, perPage = 9 } = req.query;

  const limit = perPage;
  const skip = (page - 1) * limit;

  const noticesAll = await User.find(_id).populate("favorite");

  const user = await User.find(_id).populate({
    path: "favorite",
    perDocumentLimit: limit,
    options: {
      skip,
    },
  });

  const notices = user[0].favorite;

  const totalNotices = noticesAll[0].favorite.length;
  const totalPages = Math.ceil(totalNotices / perPage);

  const result = { totalPages, notices };

  res.json(result);
});

module.exports = getFavorites;

// +
