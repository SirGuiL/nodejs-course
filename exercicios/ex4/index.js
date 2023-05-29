const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [
  {
    title: "NodeJS",
    category: "JavaScript",
    body: "Curso de NodeJS",
    stars: 4,
  },
  {
    title: "Vue",
    category: "JavaScript",
    body: "Curso de Vue",
    stars: 4.5,
  },
  {
    title: "React",
    category: "JavaScript",
    body: "Curso de React",
    stars: 4.5,
  },
];

app.get("/product/:product", (req, res) => {
  const prodTitle = req.params.product;
  const product = products.find((p) => p.title === prodTitle);

  res.render("product", { product });
});

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.listen(3000, () => {
  console.log("listen on localhost:3000");
});
