const { catchAsyncWrapper } = require("../../helpers");

const User = require("../../models/user");

const getFavorites = catchAsyncWrapper(async (req, res) => {
  const { _id } = req.user;

  const user = await User.find(_id).populate("favorite");

  res.json(user[0].favorite);
});

module.exports = getFavorites;

// +
