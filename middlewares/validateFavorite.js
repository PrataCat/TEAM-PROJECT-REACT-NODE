// const { httpError } = require("../helpers");
// const catchAsyncWrapper = require("../helpers/catchAsyncWrapper");

// //* need to check and change

// const validateFavorite = () => {
//   const func = catchAsyncWrapper(async (req, res, next) => {
//     const result = req.body;
//     console.log("req.body", req.body);
//     if (result.length === 0) {
//       return next(httpError(400, "Missing field favorite"));
//     }

//     next();
//   });

//   return func;
// };

// module.exports = validateFavorite;
