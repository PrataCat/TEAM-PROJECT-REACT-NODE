const { Types } = require("mongoose");

const { Pet } = require("../models/notice");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const { httpError } = require("../helpers");

const validateById = catchAsyncWrapper(async (req, res, next) => {
  const { petId } = req.params;

  const idIsValid = Types.ObjectId.isValid(petId);

  if (!idIsValid) return next(httpError(400, "Invalid id"));

  const pet = await Pet.findById(petId);

  if (!pet) {
    return next(httpError(404, "Not found"));
  }

  req.pet = pet;

  next();
});

module.exports = validateById;
