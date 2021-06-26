const User = require("../models/User");
const { hash, compare } = require("../helpers/passwordUtils");
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (email, password) => {
    try {
      email = email.toLowerCase();
      const hashedPass = await hash(password);
      const user = await new User({ email, password: hashedPass });
      await user.save();
      return { ok: true, user };
    } catch (error) {
      return { ok: false, error: error.errors.email.message };
    }
  },
  login: async (email, password) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw "user or password is not correct!";
      }
      const isCorrect = await compare(password, user.password);
      if (isCorrect) {
        const token = jwt.sign({ userId: user._id }, process.env.JWTSECRET);
        return { ok: true, token };
      }
    } catch (error) {
      return { ok: false, error };
    }
  },
};
