const chalk = require('chalk');

const nota = 5

if (nota > 7) {
  console.log(chalk.green.bold("Congratulations, you've been approved!"))
  console.log(chalk.green("Congratulations, you've been approved!"))
} else {
  console.log(chalk.bgRed.bold("you failed >:("))
  console.log(chalk.bgRed("you failed >:("))
}