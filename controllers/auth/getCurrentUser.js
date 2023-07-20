const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");

//* need to check

const getCurrentUser = catchAsyncWrapper(async (req, res) => {
  const { email, subscription } = req.user;

  res.json({ email, subscription });
});

module.exports = getCurrentUser;
