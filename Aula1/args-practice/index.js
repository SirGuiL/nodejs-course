// external
const chalk = require('chalk');
const minimist = require('minimist');


// internal
const sum = require('./sum').sum

console.log(sum(1, 2))

const args = minimist(process.argv.slice(2));

console.log(sum(args["num1"], args["num2"]))