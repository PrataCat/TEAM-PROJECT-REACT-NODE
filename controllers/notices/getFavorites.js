const { catchAsyncWrapper } = require("../../helpers");

const User = require("../../models/user");

const getFavorites = catchAsyncWrapper(async (req, res) => {
  const { _id } = req.user;
  const { page = 1, perPage = 9 } = req.query;

  const limit = perPage;
  const skip = (page - 1) * limit;

  const user = await User.find(_id, "", { skip, limit }).populate("favorite");

  const notices = user[0].favorite;

  const totalNotices = notices.length;
  const totalPages = Math.ceil(totalNotices / perPage);

  const result = { totalPages, notices };

  res.json(result);
});

module.exports = getFavorites;

// +
