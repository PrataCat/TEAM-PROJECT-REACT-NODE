const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const { httpError } = require("../helpers");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    try {
      let folder;
      if (file.fieldname === "avatar") {
        folder = "avatars";
      } else {
        folder = "petPhotos";
      }

      const { _id } = req.user;
      const fileName = `${_id}_${file.originalname}`;

      return {
        folder: folder,
        allowed_formats: ["jpg", "jpeg", "png"],
        public_id: fileName,
        transformation: [
          { width: 350, height: 350, gravity: "auto", crop: "fill" },
          { width: 700, height: 700 },
        ],
      };
    } catch {
      return httpError(400, "Error saving photo");
    }
  },
});

const upload = multer({ storage });

module.exports = upload;
