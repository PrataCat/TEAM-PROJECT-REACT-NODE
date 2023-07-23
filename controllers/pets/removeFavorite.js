// const Pet = require("../../models/pet");
const { httpError } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const User = require("../../models/user");

const removeFavorite = catchAsyncWrapper(async (req, res) => {
  const user = req.user;
  const pet = req.pet;
  // const {petId}=req.params;
  console.log("pet", pet);
  if (!user.favorite.includes(pet._id)) {
    throw httpError(404, "Not found");
  }

  await User.findByIdAndUpdate(user._id, {
    $pull: { favorite: pet._id },
  });
  res.status(204).json({
    message: "Pet delete success",
  });
});

module.exports = removeFavorite;
