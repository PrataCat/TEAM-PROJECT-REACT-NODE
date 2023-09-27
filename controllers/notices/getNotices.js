const { catchAsyncWrapper } = require("../../helpers");
const Notices = require("../../models/notice");

const getNotices = catchAsyncWrapper(async (req, res) => {
  const {
    query = "",
    category = "sell",
    page = 1,
    perPage = 9,
    sex = "",
    // date = 1,
  } = req.query;
  // "date": "12.03.2010"

  const skip = (page - 1) * perPage;

  const findOptions = sex
    ? {
        category,
        title: { $regex: `${query}`, $options: "i" },
        sex: `${sex}`,
      }
    : { category, title: { $regex: `${query}`, $options: "i" } };

  const totalNotices = await Notices.find(findOptions).count();
  const totalPages = Math.ceil(totalNotices / perPage);

  const noticesQuery = Notices.find(findOptions);

  noticesQuery.skip(skip).limit(perPage).sort({ createdAt: -1 });

  const notices = await noticesQuery;

  const result = { totalPages, notices };

  res.status(200).json(result);
});

module.exports = getNotices;
