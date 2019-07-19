function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.prototye.die = function () {
	this.dead = true;
}

module.exports = Mouse;