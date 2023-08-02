const { httpError, catchAsyncWrapper } = require("../../helpers");
const Notice = require("../../models/notice");

const getNoticeById = catchAsyncWrapper(async (req, res) => {
  const { noticeId } = req.params;

  const notice = await Notice.findById(noticeId).populate(
    "owner",
    "contactEmail phone"
  );

  if (!notice) {
    throw httpError(404, "Not found");
  }

  res.status(200).json({
    notice,
  });
});

module.exports = getNoticeById;
