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

// const {
//   addAdvert,
//   removeAdvert,
//   getFavorites,
//   addFavorite,
//   removeFavorite,
// } = require("../../controllers/pets");

const {
  // validateById,
  authenticate,
  //  upload/
} = require("../../middlewares");

// router.post("/advert", addAdvert);

// router.delete("/advert/:petId", validateById, removeAdvert);

// router.patch(
//   "/photo",
//   authenticate,
//   upload.single("petPhoto") // контролер для оновлення фото тварини
// );

// router.patch(
//   "/:petId/addfavorite",
//   validateById,
//   // validateFavorite,
//   addFavorite
// );
// router.patch(
//   "/:petId/removefavorite",
//   validateById,
//   //  validateFavorite,
//   removeFavorite
// );

router.get("/", getNotices);

router.get("/:noticeId", getNoticeById);

router.post("/", authenticate, addNotice);

router.patch("/:noticeId/favorite", addToFavorites);

router.get("/favorite", getFavorites);

router.patch("/favorite/:noticeId", removeFromFavorites);

router.get("get/notices/user", getUserNotices);

router.delete("/:noticeId", authenticate, removeNotice);

module.exports = router;
