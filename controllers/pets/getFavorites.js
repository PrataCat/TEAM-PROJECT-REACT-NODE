const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const getFavorites =  catchAsyncWrapper(async (req, res) => {
   const { _id } = req.user;
  //  console.log('_id', _id)
  const user = await User.find(_id).populate("favorite");
 res.json(user[0].favorite)
  // res.json(user);
});

module.exports = getFavorites;
