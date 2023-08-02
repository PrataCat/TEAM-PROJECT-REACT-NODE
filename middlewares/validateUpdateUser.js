const { httpError } = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const { updateUserValidator } = require("../schemas");

const validateUpdateUser = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { error } = updateUserValidator(req.body);

    if (error) {
      const err = error.details[0].path[0];

      return next(httpError(400, `${err} is invalid`));
    }

    next();
  });

  return func;
};

module.exports = validateUpdateUser;
