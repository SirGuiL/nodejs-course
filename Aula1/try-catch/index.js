const chalk = require("chalk");

const x = 10;

try {
  x = 2;
} catch (err) {
  console.log(chalk.bgRed.white(`Error: ${err.message}`));
}
