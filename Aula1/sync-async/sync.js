const fs = require("fs");

console.log("start");

fs.writeFileSync("sync-async/file.txt", "hi");

console.log("end");
