var http = require('http');
var fs = require('fs');

//  The response object res, is a writeable stream
//  so we can use pipe on ReadStream and pour contents in res directly
var server = http.createServer(function(req, res) {
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});

  //  Creating a ReadStream
  //  Encoding 'utf8' is must, else we see the raw buffer content
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');

/*  Example 1 : Pouring contents from ReadStream to WriteStream using pipe
myReadStream.pipe(myWriteStream);
*/
