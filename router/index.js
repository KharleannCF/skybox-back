const router = require("express").Router();
const sceneController = require("../controllers/scenes");

router.get("/scenes", async (req, res) => {
  const scenes = await sceneController.getScenes();
  res.status(200).json({ ok: true, scenes });
});

router.get("/scenes/getImages/:name", async (req, res) => {
  const scenes = await sceneController.getImages(req.params.name);
  res.status(200).json({ ok: true, scenes });
});

router.delete("/scenes/:name", async (req, res) => {
  const result = await sceneController.deleteFolder(req.params.name);
  res.status(200).json(result);
});

module.exports = router;
