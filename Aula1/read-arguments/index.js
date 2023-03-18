// name

// console.log(process.argv);

const args = process.argv.slice(2);

args.map((arg) => {
  console.log(arg.split('=')[1])
})