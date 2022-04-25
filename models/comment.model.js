const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  title: { type: String, required: true },
  comment: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, required: true, default: Date.now },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
