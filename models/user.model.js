const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  routes: [{ type: Schema.Types.ObjectId, ref: "Route" }],
  trips: [{ type: Schema.Types.ObjectId, ref: "Trip" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  created_at: { type: Date, required: true, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
