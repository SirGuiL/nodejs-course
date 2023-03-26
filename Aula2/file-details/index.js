const fs = require("fs");

fs.stat("./file-details/newfile.txt", (err, stats) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats.isSymbolicLink())
  console.log(stats.ctime)
  console.log(stats.size)
})


fs.stat("./file-details/directory", (err, stats) => {
  console.log('\n\n-------------------directory----------------\n\n')
  if (err) {
    console.log(err)
    return
  }

  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats.isSymbolicLink())
  console.log(stats.ctime)
  console.log(stats.size)
})