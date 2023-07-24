const { httpError, catchAsyncWrapper } = require("../../helpers");
const Notice = require("../../models/notice");

const getNoticeById = catchAsyncWrapper(async (req, res) => {
    const { noticeId } = req.params;

    const result = await Notice.findById(noticeId);

    res.status(200).json(result);
});

module.exports = getNoticeById;
