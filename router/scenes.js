const router = require("express").Router();
const sceneController = require("../controllers/scenes");
const upload = require("../middlewares/multer");
const session = require("../middlewares/session");

router.get("/", session, async (req, res) => {
  const scenes = await sceneController.getScenes(req.user);
  console.log(scenes);
  res.status(200).json({ ok: true, scenes });
});

router.post("/", session, upload, async (req, res) => {
  await sceneController.setImages(req.body.text, req.user);
  res.status(200).json({ ok: true });
});

router.get("/getImages/:name", async (req, res) => {
  const scenes = await sceneController.getImages(req.params.name);
  res.status(200).json({ ok: true, scenes });
});

router.delete("/:name", session, async (req, res) => {
  const result = await sceneController.deleteFolder(req.params.name, req.user);
  res.status(200).json(result);
});

module.exports = router;
