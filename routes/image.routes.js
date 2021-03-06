const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Comment = require("../models/comment.model");

router.post("/api/uploadImage", fileUploader.single("imageUrl"), (req, res, next) => {
  // console.log("file is: ", req.file)
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.path });
});
