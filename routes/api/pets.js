const express = require("express");

const {
  addAdvert,
  removeAdvert,
  getSomePets,
  getById,
  addPet,
  removePet,
  getFavorites,
  addFavorite,
  removeFavorite,
} = require("../../controllers/pets");

const {
  validateById,
  validateBody,
  authenticate,
  validateFavorite,
} = require("../../middlewares");

const router = express.Router();

router.use("/", authenticate);
// router.use("/:petId", validateById);

router.post("/advert", addAdvert);
router.post("/pet", addPet);

router.delete("/advert/:petId", validateById, removeAdvert);
router.delete("/pet/:petId", validateById, removePet);

router.get("/:userId/favorite", getFavorites);

router.patch(
  "/:petId/addfavorite",
  validateById,
  // validateFavorite,
  addFavorite
);
router.patch(
  "/:petId/removefavorite",
  validateById,
  //  validateFavorite,
  removeFavorite
);

module.exports = router;
