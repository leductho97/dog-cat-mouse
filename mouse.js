<<<<<<< HEAD
function Mouse(name) {
	this.name = name;
	this.isDead = false;
}

Mouse.prototype.die = function() {
	this.isDead = true;
};

=======
function Mouse(name) {
	this.name = name;
}

>>>>>>> parent of f7ffc3a... Add die property to Mouse function
module.exports = Mouse;