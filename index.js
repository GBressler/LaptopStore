const fs = require('fs');
const http = require('http');
const url = require('url');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
  const pathName = url.parse(req.url, true).pathname;
  const id = url.parse(req.url, true).query.id;
  //const query = url.parse(req.url, true).query.id;
  console.log(url.parse(req.url, true));
  console.log(pathName);
  
  if (pathName === '/products' || pathName === '/') {
    res.writeHead(200, {'Content-type': 'text/html' });
    
    fs.readFile(`${__dirname}/templates/templates-laptop.html`, 'utf-8', (err, data) => {
      
    });
    
    res.end('This is the PRODUCT page!');
  }

  else if (pathName === '/laptop' && id < laptopData.length) {
    res.writeHead(200, {'Content-type': 'text/html' });
    res.end(`This is the laptop page for LAPTOP ${id}!`);
  }

  else {
    res.writeHead(404, {'Content-type': 'text/html' });
    res.end('The url is not found!');
  }
  
  console.log('Someone accessed the server!');

});

server.listen(1337, '127.0.0.1', () => {
  console.log('Listening for requests!');
});

//console.log(laptopData);