const { httpError, catchAsyncWrapper } = require("../../helpers");
const Notices = require("../../models/notice");

const getNotices = catchAsyncWrapper(async (req, res, next) => {
    const { searchquery, category } = req.body;
    if (!searchquery && !category) {
        throw httpError(400, "Missing field`s");
    }

   let result = []
      
    if (searchquery && !category) {
        result = await Notices.find({
          title: { $regex: `${searchquery}`, $options: "i" },
        });
    }    
    
    if (!searchquery && category) {
        result = await Notices.find({
          category: { $regex: `${category}`, $options: "i" },
        });
    }
    
    if (searchquery && category) {
        result = await Notices.find({
          category: { $regex: `${category}`, $options: "i" },
          title: { $regex: `${searchquery}`, $options: "i" },
        });
    }
    
  res.status(200).json(result);
});
module.exports = getNotices;
