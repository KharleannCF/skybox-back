const express = require("express");
const app = express();
const port = 3001;
const router = require("./router/index");
require("./database");
/* 
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const cors = require("cors");zxczxc
const im = require("jimp");zxZxzZZXZxZx
 */
// =============== CONFIG
/* 
app.use(express.json());
app.use(cors());
app.options("*", cors());
 */
// =============== DATABASE

/* app.use(express.static(path.join(__dirname, "public"), { dotfiles: "allow" }));

const storageMul = multer.diskStorage({
	destination: async function (req, file, cb) {
		await fs.mkdir(
			`./public/data/${req.body.text}`,
			{ recursive: true },
			(err) => {
				if (err) throw err;
			}
		);
		cb(null, `./public/data/${req.body.text}`);
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname +
				"." +
				path.extname(file.originalname).split(".").pop()
		);
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

app.post("/upload", (req, res) => {
	upload(req, res, function (err) {
		if (err instanceof multer.MulterError) {
			console.log(err);
			return res.status(500).json(err);
		} else if (err) {
			console.log(err);
			return res.status(500).json(err);
		}
		res.status(200).json({ ok: true });
		fs.readdirSync(path.join(__dirname, `./public/data/${req.body.text}`), {
			withFileTypes: true,
		}).forEach(async (dirent) => {
			const image = await im.read(
				path.join(
					__dirname,
					`./public/data/${req.body.text}/${dirent.name}`
				)
			);
			await image.resize(1024, 1024);
			await image.quality(90);
			await image.writeAsync(
				path.join(
					__dirname,
					`./public/data/${req.body.text}/${dirent.name}`
				)
			);
		});
	});
});
 */
app.get("/test", (req, res) => {
	res.json({ ok: true });
});
/* 
app.use("/api", router);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
	return;
});
 */
app.listen(process.env.PORT || 3001, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
