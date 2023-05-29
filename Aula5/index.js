const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item 1", "item 2", "item 3"];
  res.render("dashboard", { items });
});

app.get("/", (req, res) => {
  const user = {
    name: "Guilherme",
    lastname: "Lima",
  };

  const auth = true;

  const approved = false;

  res.render("home", { user, auth, approved });
});

app.listen(3000, () => {
  console.log("listen on localhost:3000");
});
