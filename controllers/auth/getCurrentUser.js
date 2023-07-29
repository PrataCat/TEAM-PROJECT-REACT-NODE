const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");

const getCurrentUser = catchAsyncWrapper(async (req, res) => {
  res.json(req.user);
});

module.exports = getCurrentUser;
