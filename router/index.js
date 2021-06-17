const router = require("express").Router();
const sceneController = require("../controllers/scenes");

router.get("/scenes", async (req, res) => {
  const scenes = await sceneController.getScenes();
  res.status(200).json({ ok: true, scenes });
});

router.get("/scenes/getImages/:name", async (req, res) => {
  console.log("asdasdasdasdasd");
  const scenes = await sceneController.getImages(req.params.name);
  res.status(200).json({ ok: true, scenes });
});

router.get("/test2", async (req, res) => {
  console.log("asdasdasdasdasd");
  res.status(200).json({ ok: true });
});

module.exports = router;
