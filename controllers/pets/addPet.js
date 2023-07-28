const { httpError } = require("../../helpers");
const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const Pet = require("../../models/pet");
const { addSchema } = require("../../schemas");

const addPet = catchAsyncWrapper(async (req, res) => {
  const { error } = addSchema.validate(req.body);
  const file = req.file.path;
  const { _id: owner } = req.user;

  if (error) {
    throw httpError(400, error.message);
  }

  const result = await Pet.create({ ...req.body, owner, file });

  res.status(201).json(result);
});

module.exports = addPet;
