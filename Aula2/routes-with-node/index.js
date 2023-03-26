const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true);
  const filename = query.pathname;

  if (fs.existsSync(`./routes-with-node/${filename}`)) {
    fs.readFile(`./routes-with-node/${filename}`, (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  } else {
    fs.readFile('./routes-with-node/404.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  }
  
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
