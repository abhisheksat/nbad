//  Network Based Application Development - ITIS 5166
//  @Author - Abhishek Satpute | MS CS | Spring 2020

var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt', 'utf8');

//  These operations are asynchronous
//  If there is code below the read/write, it will execute
//  Synchronous would have blocked further execution until the read/write is over
fs.readFile('readMe.txt', 'utf8', function(err, data) {
  fs.writeFile('writeMe.txt', data, () => {});
});

/*  Example 2: Reads data from readMe.txt and writes to writeMe.txt
fs.writeFileSync('writeMe.txt', readMe);
*/

/*  Example 1: Read and print contents of file on console
console.log(readMe);
*/
