const { catchAsyncWrapper } = require("../../helpers");
const Notices = require("../../models/notice");



const getNotices = catchAsyncWrapper(async (req, res) => {
    const { query='', category = 'sell', page = 1, perPage = 9 } = req.query;

    const limit = perPage;
    const skip = (page - 1) * limit;

    const result = await Notices.find({
      category,
      title: { $regex: `${query}`, $options: "i" },
    }, '', {skip, limit});

    // let result = []
      
    // if (query && !category) {
    //     result = await Notices.find({
    //       title: { $regex: `${query}`, $options: "i" },
    //     });
    // }    
    
    // if (!query && category) {
    //     result = await Notices.find({
    //       category: { $regex: `${category}`, $options: "i" },
    //     });
    // }
    
    // if (query && category) {
    //     result = await Notices.find({
    //       category: { $regex: `${category}`, $options: "i" },
    //       title: { $regex: `${query}`, $options: "i" },
    //     });
    // }
    
  res.status(200).json(result);
});
module.exports = getNotices;
