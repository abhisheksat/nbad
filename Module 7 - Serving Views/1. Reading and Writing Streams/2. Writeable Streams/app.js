var http = require('http');
var fs = require('fs');

//  Creating a ReadStream
//  Encoding 'utf8' is must, else we see the raw buffer content
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

//  Creating a WriteStream
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

//  an event is created 'data', whenever a chunk of data is received
//  this callback on myReadStream is invoked to write data to the writestream
myReadStream.on('data', function(chunk) {
  console.log('new chunk received: ');
  myWriteStream.write(chunk);
});
