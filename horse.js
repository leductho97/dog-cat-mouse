function Horse(name) {
	this.name = name;
}

Horse.prototype.jump = function() {
	console.log('Horse is jumping!');
}

Horse.prototype.run = function() {
	console.log('Horse is running!');
}

module.exports = Horse;