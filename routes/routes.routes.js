const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Route = require("../models/route.model");

router.post("/api/route", async (req, res, next) => {
  try {
    const { name, description, waypoints, user } = req.body;

    const newRoute = {
      name,
      description,
      waypoints,
      user,
    };

    const createdRoute = await Route.create(newRoute);

    res.status(200).json(createdRoute);
  } catch (error) {
    next;
  }
});

router.get("/api/route", async (req, res, next) => {
  try {
    const allRoutes = await Route.find();

    res.status(200).json(allRoutes);
  } catch (error) {
    next(error);
  }
});

router.get("/api/route/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundRoute = await Route.findById(id);

    res.status(200).json(foundRoute);
  } catch (error) {
    next(error);
  }
});

router.put("/api/route/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, waypoints, comments } = req.body;

    const newRoute = {
      name,
      description,
      waypoints,
      comments,
    };

    const updatedRoute = await Route.findByIdAndUpdate(
      id,
      { newRoute },
      { mew: true }
    );

    res.status(200).json(updatedRoute);
  } catch (error) {
    next(error);
  }
});

router.delete("/api/route/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Route.findByIdAndDelete(id);
    res.status(200).json(`The Route with ID:${id} got deleted`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
