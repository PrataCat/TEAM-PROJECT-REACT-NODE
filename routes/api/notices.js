const express = require("express");

const {
  getNotices,
  getNoticeById,
  addToFavorites,
  getFavorites,
  removeFromFavorites,
  addNotice,
  getUserNotices,
  removeNotice,
} = require("../../controllers/notices");

const router = express.Router();

const { validateId, authenticate, upload } = require("../../middlewares");

router.get("/", getNotices);

router.get("/:noticeId", validateId("noticeId"), getNoticeById);

router.post("/", authenticate, upload.single("file"), addNotice);

router.patch(
  "/:noticeId/favorite",
  authenticate,
  validateId("noticeId"),
  addToFavorites
  );
  
router.get("/favorite", authenticate, getFavorites);
 
router.get("/user",authenticate, getUserNotices);

router.get("/:noticeId", validateId("noticeId"), getNoticeById);

router.patch(
  "/favorite/:noticeId",
  validateId("noticeId"),
  authenticate,
  removeFromFavorites
);

router.delete("/:noticeId", validateId("noticeId"), authenticate, removeNotice);

module.exports = router;
