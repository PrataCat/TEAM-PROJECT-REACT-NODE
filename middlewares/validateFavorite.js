const CustomError = require("../helpers/CustomError");
const { favoriteValidator } = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

//* need to check and change

const validateFavorite = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const result = req.body;
   console.log('req.body', req.body)
    if (result.length === 0) {
      return next(new CustomError(400, "Missing field favorite"));
    }

    const { error } = favoriteValidator(req.body);

    if (error) {
      return next(new CustomError(400, "Missing field favorite"));
    }

    next();
  });

  return func;
};

module.exports = validateFavorite;
