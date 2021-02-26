const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const fs = require("fs");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./router/index");
const im = require("jimp");
// =============== CONFIG

app.use(bodyParser.json());
app.use(express.json());
//app.use(express.static(path.join(__dirname, "public"), { dotfiles: "allow" }));

app.use(cors());
app.options("*", cors());

// =============== DATABASE
require("./database");

app.use(express.static(path.join(__dirname, "public"), { dotfiles: "allow" }));

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

app.use("/api", router);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
