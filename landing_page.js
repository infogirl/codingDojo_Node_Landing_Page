var http = require('http');
var fs = require('fs');


const server = http.createServer(function(req, res){
  //Use switch statement to determine which HTTP request it is looking for and then what to do!
  let file;

  switch (req.url){
    case "/":
      file = "index.html";
      break;
    case "/ninjas":
      file = 'ninjas.html';
      break;
    case "/dojo/new":
      file = 'dojos.html';
      break;
  }

  //send file to browser
  // first check to make sure it is not empty
  if (file !==null){
    fs.readFile('static/${file}', 'utf8', function(err, contents){
      if (err){console.log(err);}
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(contents);
      res.end();
    });
      }else{
      //if empty, throw an error
      res.writeHead(404);
      res.end("File not found!");
    }
});

server.listen(6789)
