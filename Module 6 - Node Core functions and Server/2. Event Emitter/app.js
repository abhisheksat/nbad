//  Network Based Application Development - ITIS 5166
//  @Author - Abhishek Satpute | MS CS | Spring 2020
var events = require('events');
var util = require('util');

//  Creating a person object
var Person = function(name) {
  this.name = name;
};

//  With this, we can attach 'on events' to the person
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu];

//  We iterate over the people, and attach an on emitter for every person
people.forEach(function(person) {
  person.on('speak', function(mssg) {
    console.log(person.name + ' said: ' + mssg);
  });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');

/* Example #1
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg) {
  console.log(mssg);
});

myEmitter.emit('someEvent', 'The event was emitted');
*/
