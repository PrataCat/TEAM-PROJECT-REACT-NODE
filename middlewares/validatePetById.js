// const { Types } = require("mongoose");

// const Pet = require("../models/pet");
// const { catchAsyncWrapper, httpError } = require("../helpers");

// const validatePetById = catchAsyncWrapper(async (req, res, next) => {
//   const { petId } = req.params;

//   const idIsValid = Types.ObjectId.isValid(petId);

//   if (!idIsValid) return next(httpError(400, "Invalid id"));

//   const pet = await Pet.findById(petId);

//   if (!pet) {
//     return next(httpError(404, "Not found"));
//   }

//   req.pet = pet;

//   next();
// });

// module.exports = validatePetById;
