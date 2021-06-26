const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema({
  name: { type: String, unique: [true, "There is a box with this name"] },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});
schema.plugin(uniqueValidator, {
  message: "There is a box with this name",
});

module.exports = mongoose.model("Box", schema);
