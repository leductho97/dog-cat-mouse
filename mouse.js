function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.die = function() {
	this.isDead = true;
};

function Mouse(name) {
	this.name = name;
}

Mouse.prototype.run = function() {
	console.log('Running mouse!');
};

module.exports = Mouse;