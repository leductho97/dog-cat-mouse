function Cat(name) {
	// this.name = name,
	// eat: function (mouse) {
	// 	this.stomach.push(mouse);
	// }
	// stomach: []
	this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
	this.stomach.push(mouse);
}

module.exports = Cat;