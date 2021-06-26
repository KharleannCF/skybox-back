const router = require("express").Router();
const scenes = require("./scenes");
const user = require("./user");

router.use("/scene", scenes);
router.use("/user", user);

module.exports = router;
