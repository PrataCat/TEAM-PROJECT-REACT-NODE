const { Types } = require("mongoose");

const CustomError = require("../helpers/CustomError");
const { Pet } = require("../models/pet");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const validateById = catchAsyncWrapper(async (req, res, next) => {
  const { petId } = req.params;

  const idIsValid = Types.ObjectId.isValid(petId);

  if (!idIsValid) return next(new CustomError(400, "Invalid id"));

  const pet = await Pet.findById(petId);

  if (!pet) {
    return next(new CustomError(404, "Not found"));
  }

  req.pet = pet;

  next();
});

module.exports = validateById;
