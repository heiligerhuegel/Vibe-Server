const express = require("express");
const router = express.Router();

const fileUploader = require("../config/cloudinary.config");

router.get("/", (req, res, next) => {
  res.status(200).json("All good in here");
});


module.exports = router;
