const CustomError = require("../helpers/CustomError");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const { updateUserValidator } = require("../helpers/userValidator");

const validateUpdateUser = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { name, email, password, phone, birthday, city } = req.body;

    const { error } = updateUserValidator(req.body);

    if (!name && !email && !password && !phone && !birthday && !city) {
      return next(new CustomError(400, "Missing fields"));
    }

    if (error) {
      const err = error.details[0].path[0];

      return next(new CustomError(400, `${err} is invalid`));
    }

    next();
  });

  return func;
};

module.exports = validateUpdateUser;
