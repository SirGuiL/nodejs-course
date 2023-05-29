const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["item 1", "item 2", "item 3"];
  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Learn NodeJS",
    category: "JavaScript",
    body: "This article helps you learn NodeJS",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Learn NodeJS",
      category: "JavaScript",
      body: "This article helps you learn NodeJS",
      comments: 4,
    }, {
      title: "Learn Vue",
      category: "JavaScript",
      body: "This article helps you learn Vue",
      comments: 3,
    }, {
      title: "Learn React",
      category: "JavaScript",
      body: "This article helps you learn React",
      comments: 7,
    }
  ];

  res.render("blog", { posts });
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
