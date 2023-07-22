const express = require("express");

const {
  addAdvert,
  removeAdvert,
  getSomePets,
  getById,
  addPet,
  removePet,
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

router.patch("/:petId/addfavorite", validateFavorite(), addFavorite);
router.patch("/:petId/removefavorite", validateFavorite(), removeFavorite);

module.exports = router;
