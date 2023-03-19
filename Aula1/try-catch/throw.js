const x = "10";

if (!Number.isInteger(x)) {
  throw new Error("x is not integer")
}

console.log('Continuando o código')