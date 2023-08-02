const express = require("express");

const { addPet, removePet } = require("../../controllers/pets");

const { validateId, authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.use("/", authenticate);

router.post("/", authenticate, upload.single("file"), addPet);

router.delete("/:petId", authenticate, validateId("petId"), removePet);

module.exports = router;
