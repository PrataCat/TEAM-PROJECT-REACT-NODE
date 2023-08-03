const { catchAsyncWrapper } = require("../../helpers");
const Notice = require("../../models/notice");

const getUserNotices = catchAsyncWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const { query = "", page = 1, perPage = 9 } = req.query;

  const skip = (page - 1) * perPage;

  const totalNotices = await Notice.find({
    owner,
    title: { $regex: `${query}`, $options: "i" },
  }).countDocuments();

  console.log(totalNotices)

  const notices = await Notice.find({
    owner,
    title: { $regex: `${query}`, $options: "i" },
  })
    .skip(skip)
    .limit(perPage);

  const totalPages = Math.ceil(totalNotices / perPage);

  const result = { totalPages, notices: notices.reverse() };

  res.status(200).json(result);
});

module.exports = getUserNotices;
