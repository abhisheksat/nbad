//  Network Based Application Development - ITIS 5166
//  @Author - Abhishek Satpute | MS CS | Spring 2020

var fs = require('fs');

//  While removing the directory, we need to clear/delete any content of the dir
//  After making the dir empty, the dir can be removed
fs.unlink('./stuff/writeMe.txt', function() {
  fs.rmdir('stuff', () => {});
});

/*  Example 3: Creating a file inside a dir
fs.mkdir('stuff', function() {
  fs.readFile('readMe.txt', 'utf8', function(err, data) {
    fs.writeFile('./stuff/writeMe.txt', data, () => {});
  });
});
*/

/*  Example 2: Creating and Deleting a dirctory
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');
*/
/*  Example 1: Delete a file
fs.unlink('writeMe.txt');
*/
