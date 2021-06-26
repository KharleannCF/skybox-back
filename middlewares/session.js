const jwt = require("jsonwebtoken");
const User = require("../models/User");

module.exports = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    const id = await jwt.verify(token, process.env.JWTSECRET).userId;
    const user = await User.findById(id);
    req.user = user;
    next();
  } else {
    res.status(403).json({ ok: false, error: "You must log in" });
  }
};
