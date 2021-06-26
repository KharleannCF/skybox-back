const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storageMul = multer.diskStorage({
  destination: async function (req, file, cb) {
    try {
      await fs.mkdir(
        `./public/data/${req.body.text}`,
        { recursive: true },
        (err) => {
          if (err) throw err;
        }
      );
      cb(null, `./public/data/${req.body.text}`);
    } catch (error) {
      res.json({ ok: false, error });
      return error;
    }
  },
  filename: function (req, file, cb) {
    try {
      cb(
        null,
        file.fieldname + "." + path.extname(file.originalname).split(".").pop()
      );
    } catch (error) {
      res.json({ ok: false, error });
      return error;
    }
  },
});

const upload = multer({
  storage: storageMul,
}).fields([
  { name: "front" },
  { name: "right" },
  { name: "back" },
  { name: "left" },
  { name: "top" },
  { name: "bottom" },
]);

module.exports = upload;
