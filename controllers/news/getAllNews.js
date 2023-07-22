const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const News = require("../../models/news");

const getAllNews = catchAsyncWrapper(async (req, res) => {

  const { page = 1, perPage = 6, query = "" } = req.query;
  const skip = (page - 1) * perPage;
  const filter = query ? { title: { $regex: query, $options: "i" } } : {};
    
  const news = await News.find(filter, null, {skip, limit:perPage}).sort({ date: -1 });

  const totalResults = await News.countDocuments(filter);
  const totalPages = Math.ceil(totalResults / perPage);
    
  res.status(200).json({ page, perPage, totalPages, news });
});

module.exports = getAllNews;