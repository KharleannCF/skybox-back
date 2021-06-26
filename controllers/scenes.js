const fs = require("fs");
const path = require("path");
const Box = require("../models/Box");
const im = require("jimp");

module.exports = {
  getScenes: async (user) => {
    /* 
    const directories = await fs
      .readdirSync(path.join(__dirname, "../public/data"), {
        withFileTypes: true,
      })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
     */
    const boxes = await Box.find({ userId: user._id });
    return boxes.map((elem) => {
      return elem.name;
    });
  },
  getImages: async (folder) => {
    const images = await fs
      .readdirSync(path.join(__dirname, `../public/data/${folder}`), {
        withFileTypes: true,
      })
      .map((dirent) => {
        return `/data/${folder}/${dirent.name}`;
      });
    const result = {};
    images.forEach((elem) => {
      result[elem.split("/").pop().split(".")[0]] = elem;
    });
    return result;
    //ttest
  },
  deleteFolder: async (folder, user) => {
    try {
      await fs.rmdirSync(path.join(__dirname, `../public/data/${folder}`), {
        recursive: true,
      });
      await Box.findOneAndRemove({ userId: user._id, name: folder });
      return { ok: true };
    } catch (err) {
      console.log(err);
      return { ok: false, error: err };
    }
    //ttest
  },
  setImages: async (folder, user) => {
    try {
      fs.readdirSync(path.join(__dirname, `../public/data/${folder}`), {
        withFileTypes: true,
      }).forEach(async (dirent) => {
        const image = await im.read(
          path.join(__dirname, `../public/data/${folder}/${dirent.name}`)
        );
        await image.resize(1024, 1024);
        await image.quality(90);
        await image.writeAsync(
          path.join(__dirname, `../public/data/${folder}/${dirent.name}`)
        );
      });
      const box = new Box({ userId: user._id, name: folder });
      await box.save();
    } catch (error) {
      await fs.rmdirSync(path.join(__dirname, `../public/data/${folder}`), {
        recursive: true,
      });
      await Box.findOneAndRemove({ userId: user._id, name: folder });
      console.log(error);
    }
  },
};
