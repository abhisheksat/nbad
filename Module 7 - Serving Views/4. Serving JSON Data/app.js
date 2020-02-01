var http = require('http');
var fs = require('fs');

//  MIME Type is application/json
var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'application/json'});

  //  Creating a JSON object
  var myObj = {
    name: 'Ryu',
    job: 'Ninja',
    age: 29
  };

  //  returning a JSON Object
  res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
