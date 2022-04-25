const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const Trip = require("../models/trip.model");

router.post("/api/trip", async (req, res, next) => {
  try {
    const { name, description, user } = req.body;

    const newTrip = {
      name,
      description,
      user,
    };

    const createdTrip = await Trip.create(newTrip);

    res.status(200).json(createdTrip);
  } catch (error) {
    next;
  }
});

router.get("/api/trip", async (req, res, next) => {
  try {
    const allTrips = await Trip.find();

    res.status(200).json(allTrips);
  } catch (error) {
    next(error);
  }
});

router.get("/api/trip/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundTrip = await Trip.findById(id);

    res.status(200).json(foundTrip);
  } catch (error) {
    next(error);
  }
});

router.put("/api/trip/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, routes } = req.body;

    const newTrip = {
      name,
      description,
      routes,
    };

    const updatedTrip = await Trip.findByIdAndUpdate(id, { newTrip }, { mew: true });

    res.status(200).json(updatedTrip);
  } catch (error) {
    next(error);
  }
});

router.delete("/api/trip/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Trip.findByIdAndDelete(id);
    res.status(200).json(`The Trip with ID:${id} got deleted`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
