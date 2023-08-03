const { catchAsyncWrapper } = require("../../helpers");
const Notices = require("../../models/notice");

const getNotices = catchAsyncWrapper(async (req, res) => {
  const { query = "", category = "sell", page = 1, perPage = 9 } = req.query;

  const limit = perPage;
  const skip = (page - 1) * limit;

  const noticesAll = await Notices.find({
    category,
    title: { $regex: `${query}`, $options: "i" },
  });

  const notices = await Notices.find(
    {
      category,
      title: { $regex: `${query}`, $options: "i" },
    },
    "",
    { skip, limit }
  );

  const totalNotices = noticesAll.length;

  const totalPages = Math.ceil(totalNotices / perPage);

  const result = { totalPages, notices: notices.reverse() };

  res.status(200).json(result);
});
module.exports = getNotices;
