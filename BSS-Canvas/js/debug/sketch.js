var Sketch = function() {
	var self = this;

	var canvas = {};
	var context = {};

	// constants
 	var STAGE = "stage";

	function Sketch() {
		canvas[STAGE] = document.getElementById(STAGE);
		context[STAGE] = canvas[STAGE].getContext("2d");

		return self;
	}

	self.update = function() {

	}

	self.draw = function() {

	}

	return Sketch();
}