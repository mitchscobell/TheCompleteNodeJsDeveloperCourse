const fs = require("fs");

const getNotes = function () {
  try {
    const data = fs.readFileSync("./notes.txt", "utf8");
    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = getNotes;
