const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

// read body
app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());

// const checkAuth = (req, res, next) => {
//   req.authStatus = true;

//   if (req.authStatus) {
//     console.log('está logado')
//     next();
//   } else {
//     console.log('não está logado')
//     next();
//   }
// }

// app.use(checkAuth)

app.get("/users/add", (req, res) => {
  res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  console.log(`${name} has ${age} years old`);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id

  console.log(id)
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
