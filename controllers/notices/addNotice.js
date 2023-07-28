const { catchAsyncWrapper, httpError } = require("../../helpers");
const Notice = require("../../models/notice");
const { lostAndInGoodHandsSchema, sellSchema } = require("../../schemas");

const addNotice = catchAsyncWrapper(async (req, res) => {
  const category = req.body.category;
  // const file = req.file.path;

  const { error } =
    category === "sell"
      ? sellSchema.validate(req.body)
      : lostAndInGoodHandsSchema.validate(req.body);

  if (error) {
    throw httpError(400, "Bad request");
  }

  const { _id: owner } = req.user;
  const result = await Notice.create({ ...req.body, owner });

  res.status(201).json(result);
});

module.exports = addNotice;
