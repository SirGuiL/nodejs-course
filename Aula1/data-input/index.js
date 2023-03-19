const chalk = require('chalk');

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("What's your favorite language? ", (language) => {
  const _language = language.toLowerCase();
  switch (_language) {
    case "python":
      console.log(chalk.green(`My favorite language is ${_language}`))
      break;
    case "javascript":
      console.log(chalk.yellow(`My favorite language is ${_language}`))
      break;
    case "php":
      console.log(chalk.blue(`My favorite language is ${_language}`))
      break;
    default:
      console.log(`My favorite language is ${_language}`)
      break;
  }
  readline.close();
})
