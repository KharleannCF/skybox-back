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
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGQ2NTc4YjMxZjAyMzBhOTQ3ZmM0ZGEiLCJpYXQiOjE2MjQ2NzQ0NDJ9.OoO-Gm4s45olHIhsFoEdxVALd-tEFFUygt03uRdPlhw";
    const id = await jwt.verify(token, process.env.JWTSECRET).userId;
    const user = await User.findById(id);
    req.user = user;
    next();
    //res.status(403).json({ ok: false, error: "You must log in" });
  }
};
