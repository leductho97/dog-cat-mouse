var Horse = require('./horse');

function Tiger(name) {
	this.name = name;
	this.stomach = [];
}

Tiger.prototype.eat = function(animal) {
	if (animal instanceof Horse) {
		this.stomach.push(animal);
	} else {
		throw new Error('Sorry! Tiger just like Horse meat!');
	}	
};

module.exports = Tiger;
