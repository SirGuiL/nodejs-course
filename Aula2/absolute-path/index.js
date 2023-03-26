const path = require('path');

console.log(path.resolve('test.txt'))

const midFolder = 'reports'
const fileName = 'guilherme.txt'

const finalPath = path.join('/', 'files', midFolder, fileName);

console.log(`\n\n${finalPath}`)