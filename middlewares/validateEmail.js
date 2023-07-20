const { emailValidator } = require("../helpers");
const CustomError = require("../helpers/CustomError");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const validateEmail = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
      return next(new CustomError(400, "Missing required field email"));
    }

    const { error } = emailValidator(req.body);

    if (error) {
      return next(new CustomError(400, "Email is not valid"));
    }

    next();
  });

  return func;
};

module.exports = validateEmail;
