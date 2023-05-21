const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const users = require('./users');

// read body
app.use(express.urlencoded({
  extended: true,
}));

// static files
app.use(express.static('public'));

app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.use('/users', users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/notfound.html`);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
