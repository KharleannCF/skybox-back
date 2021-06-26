const router = require("express").Router();
const sceneController = require("../controllers/scenes");
const upload = require("../middlewares/multer");
const fs = require("fs");
const path = require("path");
const im = require("jimp");

router.get("/", async (req, res) => {
  const scenes = await sceneController.getScenes();
  res.status(200).json({ ok: true, scenes });
});

router.post("/", upload, async (req, res) => {
  res.status(200).json({ ok: true });
  await sceneController.setImages(req.body.text);
});

router.get("/getImages/:name", async (req, res) => {
  const scenes = await sceneController.getImages(req.params.name);
  res.status(200).json({ ok: true, scenes });
});

router.delete("/:name", async (req, res) => {
  const result = await sceneController.deleteFolder(req.params.name);
  res.status(200).json(result);
});

module.exports = router;
