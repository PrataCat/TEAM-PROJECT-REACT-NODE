const { Types } = require("mongoose");

const Notice = require("../models/notice");
const { catchAsyncWrapper, httpError } = require("../helpers");

const validateNoticeById = catchAsyncWrapper(async (req, res, next) => {
  const { noticeId } = req.params;

  const idIsValid = Types.ObjectId.isValid(noticeId);

  if (!idIsValid) return next(httpError(400, "Invalid id"));

  const notice = await Notice.findById(noticeId);

  if (!notice) {
    return next(httpError(404, "Not found"));
  }

  req.notice = notice;

  next();
});

module.exports = validateNoticeById;
