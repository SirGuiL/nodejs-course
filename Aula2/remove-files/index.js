const fs = require("fs");

fs.unlink("./remove-files/file.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("file deleted successfully");
});
