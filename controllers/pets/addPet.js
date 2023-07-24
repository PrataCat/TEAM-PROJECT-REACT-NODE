const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
// const httpError = require("../../helpers/httpError");
const Pet = require("../../models/pet");
// const { addSchema } = require("../../schemas");

const addPet = catchAsyncWrapper(async (req, res) => {
  // const { error } = addSchema.validate(req.body);

  // if (error) {
  //   // const errMessage = `missing required "${error.details[0].path[0]}" field`;
  //   throw httpError(400, error.message);
  // }

  const { _id: owner } = req.user;
  const result = await Pet.create({ ...req.body, owner });

  res.status(201).json(result);
});

module.exports = addPet;
