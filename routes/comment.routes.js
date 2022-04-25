const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Comment = require("../models/comment.model");

router.post("/api/comment", async (req, res, next) => {
  try {
    const { title, comment, user } = req.body;

    const newComment = {
      title,
      comment,
      user,
    };

    const createdComment = await Comment.create(newComment);

    res.status(200).json(createdComment);
  } catch (error) {
    next;
  }
});

router.get("/api/comment", async (req, res, next) => {
  try {
    const allComments = await Comment.find();

    res.status(200).json(allComments);
  } catch (error) {
    next(error);
  }
});

router.get("/api/comment/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundComment = await Comment.findById(id);

    res.status(200).json(foundComment);
  } catch (error) {
    next(error);
  }
});

router.put("/api/comment/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, comment } = req.body;

    const newComment = {
      title,
      comment,
    };

    const updatedComment = await Comment.findByIdAndUpdate(id, { newComment }, { mew: true });

    res.status(200).json(updatedComment);
  } catch (error) {
    next(error);
  }
});

router.delete("/api/comment/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(200).json(`The Comment with ID:${id} got deleted`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
