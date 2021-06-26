const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: [true, "Email already in use"],
  },
  password: { type: String, required: true },
});
schema.plugin(uniqueValidator, {
  message: "This email is already in use.",
});

module.exports = mongoose.model("User", schema);
