const { catchAsyncWrapper, httpError } = require("../../helpers");
const Pet = require("../../models/pet");

const removePet = catchAsyncWrapper(async (req, res) => {
  const { petId } = req.params;

  const pet = await Pet.findById(petId);

  if (!pet) {
    throw httpError(404, "Not found");
  }

  if (pet.owner.toString() !== req.user._id.toString()) {
    throw httpError(400, "Bad request");
  }
  await Pet.findByIdAndRemove(petId);

  res.json({ message: "Pet deleted" });
});

module.exports = removePet;
