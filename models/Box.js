const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  front: { type: String, required: true },
  right: { type: String, required: true },
  back: { type: String, required: true },
  left: { type: String, required: true },
  top: { type: String, required: true },
  bottom: { type: String, required: true },
});

module.exports = mongoose.model("Box", schema);
