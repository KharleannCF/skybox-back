const router = require("express").Router();
const userController = require("../controllers/user");
const { hash, compare } = require("../helpers/passwordUtils");
const session = require("../middlewares/session");

router.post("/", async (req, res) => {
  try {
    const response = await userController.create(
      req.body.email,
      req.body.password
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json(response);
  }
});

router.post("/login", async (req, res) => {
  console.log("==========");
  try {
    const response = await userController.login(
      req.body.email,
      req.body.password
    );
    res.status(200).json(response);
  } catch (error) {}
});

router.get("/test", session, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
