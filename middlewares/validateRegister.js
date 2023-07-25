const { httpError } = require("../helpers");
const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

const User = require("../models/user");
const { userRegisterValidator } = require("../schemas");

const validateRegister = () => {
  const func = catchAsyncWrapper(async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;
    const { error, value } = userRegisterValidator(req.body);

    if (!name && !email && !password && !confirmPassword) {
      return next(httpError(400, "Missing fields"));
    }

    if (error) {
      const err = error.details[0].path[0];
      return next(httpError(400, `${err} is not valid`));
    }

    if (password !== confirmPassword) {
      return next(
        httpError(400, "password do not match with confirm password")
      );
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
