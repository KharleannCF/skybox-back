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
};
