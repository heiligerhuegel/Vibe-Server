const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const tripSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  days: { type: Number },
  routes: [{ type: Schema.Types.ObjectId, ref: "Route" }],
  user: { type: Schema.Types.ObjectId, required: true },
  created_at: { type: Date, required: true, default: Date.now },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
