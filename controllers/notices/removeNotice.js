const { catchAsyncWrapper, httpError } = require("../../helpers");
const Notice = require("../../models/notice");

const removeNotice = catchAsyncWrapper(async (req, res) => {
  const { noticeId } = req.params;
  const notice = await Notice.findById(noticeId);
  

  if (!notice) {
    throw httpError(404, "Not found");
  }
  if (notice.owner.toString() !== req.user._id.toString()) {
    throw httpError(400, "Bad request");
  }
  await Notice.findByIdAndRemove(noticeId);
  res.json({ message: "Notice delete" });
});

module.exports = removeNotice;
