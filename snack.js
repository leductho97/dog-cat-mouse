function Snack(name) {
	this.name = name;
	this.bite = function () {
		console.log('Gru!');
	}
}

module.exports = Snack;