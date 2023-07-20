const multer = require("multer");
const path = require("path");

const tmpDir = path.join(__dirname, "../", "tmp");

//* need to check and change

const multerConfig = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null, tmpDir);
  },
  filename: (req, file, cd) => {
    cd(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
