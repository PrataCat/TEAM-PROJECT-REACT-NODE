const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

//* need to check

const logout = catchAsyncWrapper(async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json();
});
module.exports = logout;
