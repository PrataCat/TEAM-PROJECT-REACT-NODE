const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Pet = require("../../models/pet");

const addPet = catchAsyncWrapper(async (req, res) => {
  const file = req.file.path;
  const { _id: owner } = req.user;
  const result = await Pet.create({ ...req.body, owner, file });

  res.status(201).json(result);
});

module.exports = addPet;
