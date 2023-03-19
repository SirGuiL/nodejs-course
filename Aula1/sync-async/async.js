const fs = require("fs");

console.log("start");

fs.writeFile("sync-async/file.txt", "hi2", (err) => {
  setTimeout(() => {
    console.log("done");
  }, 2000)
});

console.log("end");
