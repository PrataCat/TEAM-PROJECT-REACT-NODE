const { catchAsyncWrapper, httpError } = require("../../helpers");
const Notice = require("../../models/notice");
const { addSchema, sellSchema } = require("../../schemas");

const addNotice = catchAsyncWrapper(async (req, res) => {
  const category = req.body.category;

  const { error } =
    category === "sell"
      ? sellSchema.validate(req.body)
      : addSchema.validate(req.body);

  if (error) {
    // const errMessage = `missing required "${error.details[0].path[0]}" field`;
    throw httpError(400, error.message);
  }

  const { _id: owner } = req.user;
  const result = await Notice.create({ ...req.body, owner });

  res.status(201).json(result);
});

module.exports = addNotice;
