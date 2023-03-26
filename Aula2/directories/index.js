const fs = require('fs');

if (!fs.existsSync('./directories/my-dir')) {
  console.log("doesn't exist")
  fs.mkdirSync('./directories/my-dir');
}


if (!fs.existsSync('./directories/my-dir')) {
  console.log("doesn't exist")
} else {
  console.log('exists')
}