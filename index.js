// var Dog = require('./Dog');
// var Cat = require('./Cat');

// var tom = new Dog('Tom');
// var cat = new Cat('Jerry');

// tom.eat(cat);
// console.log(tom);

var Mouse = require('./Mouse');
var Cat = require('./Cat');
var Dog = require('./Dog');

var tom = new Cat('Tom');
var jerry = new Mouse('Jerry');
var mon = new Dog('Mon');

try {
	tom.eat(mon);	
} catch (error) {
	console.log('Error logic when you force a cat eat a dog!');
}

console.log(tom);