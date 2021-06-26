require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = 3001;
const fs = require("fs");
const multer = require("multer");
const cors = require("cors");
const router = require("./router/index");

// =============== CONFIG
app.use(express.json());

app.use(cors());
app.options("*", cors());

// =============== DATABASE
require("./database");

app.use(express.static(path.join(__dirname, "public"), { dotfiles: "allow" }));

app.use("/api", router);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
  return;
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
