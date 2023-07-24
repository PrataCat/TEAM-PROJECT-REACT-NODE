const { catchAsyncWrapper, httpError } = require("../../helpers");
const Pet = require("../../models/pet");

const removePet = catchAsyncWrapper(async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndRemove(petId);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({ message: "Pet deleted" });
});

module.exports = removePet;
