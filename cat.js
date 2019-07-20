var Mouse = require('./Mouse');

function Cat(name) {
	// this.name = name,
	// eat: function (mouse) {
	// 	this.stomach.push(mouse);
	// }
	// stomach: []
	this.stomach = [];
}

Cat.prototype.eat = function (animal) {
	if (animal instanceof Mouse) {
		this.stomach.push(animal);	
	} else {
		throw new Error('Cat only eat mouse!');
	}
	
}

module.exports = Cat;