const events = require('events');
const util = require('util');

var person = function (name) {
  this.name = name;
}

util.inherits(person, events.EventEmitter)

var james = new person('james');
var mary = new person('mary');
var ryu = new person('ryu');
var people = [james, mary, ryu]

people.forEach(function (person) {
  person.on('speak', function (mssg) {
    console.log(person.name +' said: '+ mssg);
  });
});

james.emit('speak', 'hey Dude');
