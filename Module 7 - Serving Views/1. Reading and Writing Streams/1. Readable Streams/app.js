var http = require('http');
var fs = require('fs');

//  Creating a ReadStream
//  Encoding 'utf8' is must, else we see the raw buffer content
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

//  an event is created 'data', whenever a chunk of data is received
//  this callback on myReadStream is invoked to print the method's body
myReadStream.on('data', function(chunk) {
  console.log('new chunk received: ');
  console.log(chunk);
});
