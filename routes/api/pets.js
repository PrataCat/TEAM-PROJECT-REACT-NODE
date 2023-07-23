const express = require("express");

const { addPet, removePet } = require("../../controllers/pets");

const { validateById, authenticate } = require("../../middlewares");

const router = express.Router();

router.use("/", authenticate);

router.post("/", addPet);

router.delete("/:petId", validateById, removePet);

module.exports = router;
