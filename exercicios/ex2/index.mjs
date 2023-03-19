import chalk from "chalk"
import inquirer from "inquirer"

inquirer.prompt([{
  name: 'question1',
  message: "what is your name?",
}, {
  name: 'question2',
  message: "how old are you?",
}]).then((answers) => {
  console.log(chalk.bgYellow.black(`My name is ${answers.question1} and i'm ${answers.question2} years old`))
}).catch((err) => {
  console.error(err);
});