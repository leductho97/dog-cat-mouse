// var Dog = require('./Dog');
// var Cat = require('./Cat');

// var tom = new Dog('Tom');
// var cat = new Cat('Jerry');

// tom.eat(cat);
// console.log(tom);

// var Mouse = require('./Mouse');
// var Cat = require('./Cat');
// var Dog = require('./Dog');

// var tom = new Cat('Tom');
// var jerry = new Mouse('Jerry');
// var mon = new Dog('Mon');

// try {
// 	tom.eat(mon);	
// } catch (error) {
// 	console.log('Error logic when you force a cat eat a dog!');
// }

// console.log(tom);

var Horse = require('./horse');
var Tiger = require('./tiger');
var Snack = require('./snack');

var Pon = new Horse('Pon');
var Kali = new Tiger('Kali');
var Judy = new Snack('Judy');

try {
	Kali.eat(Judy);	
} catch(error) {
	console.log('Xin loi! Ho khong thich an thit ran!');
}

console.log(Kali);
