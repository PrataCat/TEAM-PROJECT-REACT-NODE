const { catchAsyncWrapper, httpError } = require("../../helpers");
const Notice = require("../../models/notice");

const removeNotice = catchAsyncWrapper(async (req, res) => {
  const { noticeId } = req.params;

  const result = await Notice.findByIdAndRemove(noticeId);

  if (!result) {
    throw httpError(404, "Not found");
  }

  res.json({ message: "Announcement deleted" });
});

module.exports = removeNotice;
