const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Pet = require("../../models/pet");

//* need to check

const removePet = catchAsyncWrapper(async (req, res) => {
  const { contactId } = req.params;

  await Pet.findByIdAndDelete(contactId);

  res.json({ message: "Pet deleted" });
});

module.exports = removePet;
