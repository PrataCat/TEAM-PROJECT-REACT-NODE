const { httpError } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const { Pet } = require("../../models/notice");

const removeAdvert = catchAsyncWrapper(async (req, res) => {
  const { petId } = req.params;

  const result = await Pet.findByIdAndRemove(petId);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({ message: "Announcement deleted" });
});

module.exports = removeAdvert;
