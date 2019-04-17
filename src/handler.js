const fs =require('fs');
const path = require('path');
const language = fs.readFileSync(path.join(__dirname, '..', 'languages.txt'), 'utf-8').split(/\n/);


const handlerHome = (request, response) => {
  const url = request.url;
   const filePath = path.join(__dirname, "..", 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
      if(err) {
        response.writeHead(404, { 'Content-Type': 'text/html'});
        response.end('<h1>Page not found</h1>');
      } else {
        response.writeHead(200, { "Content-Type": 'text/html'});
        response.end(file);
      }
    });
};
const handlerPublic = (request ,response, url) => {
    const extension = url.split('.')[1];
    const extensionTypes = {
      html: 'text/html',
      js: 'application/javascript',
      css: 'text/css',
      png: 'image/png'
    };
    const filePath = path.join(__dirname, '..', url);
    fs.readFile(filePath, (error, file) => {
      if (error){
        console.log(error);
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('<h1>Sooooo Sorry... I can\'t find this file...</h1>')
      } else {
        response.writeHead(200, { 'Content-type': extensionTypes[extension] });
        response.end(file);
      }
    });
  };
  const handlerSearch = (request, response, url) => {
    console.log(language);
    const result = language.filter(el => el[0] === 'A');
    console.log(result);  
  }


module.exports = {
   handlerHome,
   handlerPublic,
   handlerSearch
 }
