// const { httpError } = require("../../helpers");
// const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
// const User = require("../../models/user");

// const addFavorite = catchAsyncWrapper(async (req, res) => {
//   const user = req.user;
//   const { petId } = req.params;

//   if (user.favorite.includes(petId)) {
//     throw httpError(404, "Not found");
//   }

//   const result = await User.findByIdAndUpdate(
//     user._id,
//     {
//       $push: { favorite: petId },
//     },
//     { new: true }
//   );

//   res.status(201).json(result);
// });

// module.exports = addFavorite;
