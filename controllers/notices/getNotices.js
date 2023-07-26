const { httpError, catchAsyncWrapper } = require("../../helpers");
const Notices = require("../../models/notice");
const User = require("../../models/user");

const getNotices = catchAsyncWrapper(async (req, res, next) => {
  const { searchquery, category, favorite } = req.body;

  
    const findByTitle = await Notices.find({
      title: { $regex: `${searchquery}` },
    });
  

  
    const findByCategory = await Notices.find({
      category: {
        $elemMatch: {
          id: ObjectId(category),
        },
      },
    });
  

  const { _id: userId } = req.user;
  
    const findFavorite = await Notices.find({
      favorite: {
        $elemMatch: {
          id: ObjectId(favorite),
        },
      },
    });
  
});
module.exports = getNotices;
