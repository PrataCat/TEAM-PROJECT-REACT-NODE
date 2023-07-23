const { httpError } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const { Pet } = require("../../models/notice");

const removePet = catchAsyncWrapper(async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndRemove(petId);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({ message: "Pet deleted" });
});

module.exports = removePet;
