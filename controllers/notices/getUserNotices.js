const { httpError, catchAsyncWrapper } = require("../../helpers");
const Notice = require("../../models/notice");

const getUserNotices = catchAsyncWrapper(async (req, res) => {
  const { _id: owner } = req.user;

  const myPets = await Notice.find({ owner });

  res.status(200).json(myPets);
})

module.exports = getUserNotices;