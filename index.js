// EXPRESS IMPLEMENTATION

const express = require('express');
const app = express();
const port = 8080;

// Route functions

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
  res.sendFile('about.html', {root: __dirname});
});

app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', {root: __dirname});
});

// Handle 404 responses

app.use((req, res, next) => {
  res.status(404).sendFile('404.html', {root: __dirname});
});

// Handle errors

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// Start server on specified port

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});


// VANILLA NODE.JS IMPLEMENTATION

// const http = require('http');
// const fs = require('fs');

// http.createServer(function(req, res) {
//   const pathName = req.url.slice(1);
//   let fileName = getFileName(pathName);

//   fs.readFile(fileName, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       res.write('404 error - page not found');
//       return res.end();
//     }
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   })
// }).listen(8080);

// function getFileName(path) {
//   if (path == '') {
//     return 'index.html';
//   } else if (path == 'about' || path == 'contact-me') {
//     return path + '.html';
//   } else {
//     return '404.html';
//   }
// }