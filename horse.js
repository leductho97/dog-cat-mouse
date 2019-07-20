function Horse(name) {
	this.name = name;
}

Horse.prototype.jump = function() {
	console.log('Horse is jumping!');
};

module.exports = Horse;