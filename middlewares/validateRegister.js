const { httpError } = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const User = require("../models/user");
const { userRegisterValidator } = require("../schemas");

const validateRegister = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { name, email, password } = req.body;
    const { error, value } = userRegisterValidator(req.body);

    if (!name && !email && !password) {
      return next(httpError(400, "Missing fields"));
    }

    if (error) {
      const err = error.details[0].path[0];
      return next(httpError(400, `${err} is not valid`));
    }

    const user = await User.exists({ email: value.email });

    if (user) {
      return next(httpError(409, "Email in use"));
    }

    next();
  });

  return func;
};

module.exports = validateRegister;
