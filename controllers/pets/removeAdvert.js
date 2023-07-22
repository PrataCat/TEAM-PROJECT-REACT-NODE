const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const { CustomError } = require("../../helpers");
const { Pet } = require("../../models/pet");

const removeAdvert = catchAsyncWrapper(async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndRemove(petId);

  if (!result) {
    throw CustomError(404, "Not found");
  }

  res.json({ message: "Announcement deleted" });
});

module.exports = removeAdvert;
