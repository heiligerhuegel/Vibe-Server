const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const routeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  waypoints: [
    [
      { type: Number, required: true },
      { type: Number, required: true },
    ],
  ],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, required: true, default: Date.now },
});

const Route = mongoose.model("Route", routeSchema);

module.exports = Route;
