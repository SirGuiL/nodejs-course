const fs = require("fs");

const file = "./rename-file/file.txt"
const newFile = "./rename-file/newfile.txt"

fs.rename(file, newFile, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`file ${file} successfully renamed to ${newFile}`);
});
