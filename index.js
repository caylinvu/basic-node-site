const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  const pathName = req.url.slice(1);
  let fileName = getFileName(pathName);

  fs.readFile(fileName, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('404 error - page not found');
      return res.end();
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080);

function getFileName(path) {
  if (path == '') {
    return 'index.html';
  } else if (path == 'about' || path == 'contact-me') {
    return path + '.html';
  } else {
    return '404.html';
  }
}