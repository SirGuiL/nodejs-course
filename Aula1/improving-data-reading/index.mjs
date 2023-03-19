import inquirer from "inquirer"

inquirer.prompt([{
  name: 'question1',
  message: "what's the first note?",
}, {
  name: 'question2',
  message: "what's the second note?",
}]).then((answers) => {
  const average = (parseFloat(answers.question1) + parseFloat(answers.question2)) / 2

  console.log(`His average was ${average}`)
}).catch((err) => {
  console.error(err);
});