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
  validateId, authenticate,
 
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
