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


const { validateId, authenticate } = require("../../middlewares");


router.get("/", getNotices);

router.get("/:noticeId", validateId("noticeId"), getNoticeById);

 router.post("/", authenticate, addNotice);

router.patch(
  "/:noticeId/favorite",
  authenticate,
  validateId("noticeId"),
  addToFavorites
  );
  
 router.get("/favorite", authenticate, getFavorites);

router.patch("/favorite/:noticeId", validateId("noticeId"),authenticate, removeFromFavorites);

router.get("/user", getUserNotices);

router.delete("/:noticeId", validateId("noticeId"), authenticate, removeNotice);

module.exports = router;
