const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const logout = catchAsyncWrapper(async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).end();
});
module.exports = logout;
