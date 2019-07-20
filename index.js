var Dog = require('./Dog');
var Cat = require('./Cat');

var tom = new Dog('Tom');
var cat = new Cat('Jerry');

tom.eat(cat);
console.log(tom);