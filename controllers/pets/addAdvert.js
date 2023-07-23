const catchAsyncWrapper = require("../../helpers/catchAsyncWrapper");
const { CustomError } = require("../../helpers");
const { Pet, addSchema, sellSchema } = require("../../models/pet");

const addAdvert = catchAsyncWrapper(async (req, res) => {
  const category = req.body.category;

  const { error } =
    category === "sell"
      ? sellSchema.validate(req.body)
      : addSchema.validate(req.body);

  if (error) {
    const errMessage = `missing required "${error.details[0].path[0]}" field`;
    throw CustomError(400, errMessage);
  }

  const { _id: owner } = req.user;
  const result = await Pet.create({ ...req.body, owner });

  res.status(201).json(result);
});

module.exports = addAdvert;
