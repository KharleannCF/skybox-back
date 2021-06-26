const fs = require("fs");
const path = require("path");

module.exports = {
  getScenes: async () => {
    const directories = await fs
      .readdirSync(path.join(__dirname, "../public/data"), {
        withFileTypes: true,
      })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
    return directories;
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
  deleteFolder: async (folder) => {
    try {
      await fs.rmdirSync(path.join(__dirname, `../public/data/${folder}`), {
        recursive: true,
      });
      return { ok: true };
    } catch (err) {
      console.log(err);
      return { ok: false, error: err };
    }
    //ttest
  },
  setImages: async (folder) => {
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
  },
};
