const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");

const getCurrentUser = catchAsyncWrapper(async (req, res) => {
  const { email } = req.user;

  res.json({ email });
});

module.exports = getCurrentUser;
