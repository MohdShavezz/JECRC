import { CloudinaryStorage } from "multer-storage-cloudinary";
import express from "express";
import multer from "multer";
import cloudinary from "./cloudinary.js";

const app = express();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "jecrc",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

export default upload;