const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");

exports.hash = async (password) => {
  const saltRounds = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

exports.compare = (toCompare, hash) => {
  return new Promise((succ, exceptionHandler) => {
    bcrypt.compare(toCompare, hash, function (err, res) {
      if (err) {
        exceptionHandler(err);
      } else {
        succ(res);
      }
    });
  });
};

exports.encrypt = (password) => {
  return CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();
};

exports.decrypt = (password) => {
  var bytes = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
