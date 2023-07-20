const { userValidator } = require("../helpers");
const CustomError = require("../helpers/CustomError");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

//* need to check and change

const validateUser = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email && !password) {
      return next(new CustomError(400, "Missing fields"));
    }

    const { error } = userValidator(req.body);

    if (error) {
      return next(new CustomError(400, "Email or password is not valid"));
    }

    next();
  });

  return func;
};

module.exports = validateUser;
