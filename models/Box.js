const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String },
  ingredients: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Box", schema);
