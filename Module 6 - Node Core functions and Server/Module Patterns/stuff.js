//  Network Based Application Development - ITIS 5166
//  @Author - Abhishek Satpute | MS CS | Spring 2020

var counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `The sum of two numbers is ${a+b}`;
}

var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
