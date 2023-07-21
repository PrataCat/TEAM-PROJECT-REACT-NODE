const { emailValidator } = require("../helpers");
const CustomError = require("../helpers/CustomError");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");
const User = require("../models/user");

const validateEmail = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { email } = req.body;
    const { error } = emailValidator(req.body);

    const user = await User.findOne({ email });

    if (error) {
      const err = error.details[0].path[0];

      return next(new CustomError(400, `${err} is unvalid`));
    }

    if (!user) {
      return next(new CustomError(404, "User not found"));
    }

    if (!email) {
      return next(new CustomError(400, "missing required field email"));
    }

    if (user.verify) {
      return next(new CustomError(400, "Verification has already been passed"));
    }

    next();
  });

  return func;
};

module.exports = validateEmail;
