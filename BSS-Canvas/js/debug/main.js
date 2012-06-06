(function() {
	var self = this;

	function main() {
		var self = this;
		var stats;
		var sketch = new Sketch();

		(function init() {
			if(IS_DEBUG_MODE) initStats();

			Ticker.setFPS(60);
			Ticker.addListener(render);
		})();


		function render() {
			sketch.update();
			sketch.draw();

			if(IS_DEBUG_MODE) stats.update();
		}

		// ------------------------------------------
		function initStats() {
			stats = new Stats();
			var statsEl = stats.getDomElement();
			statsEl.style.position = 'absolute';
			statsEl.style.right = '0px';
			statsEl.style.bottom = '0px';
			statsEl.style.zIndex = 1000;

			document.body.appendChild(statsEl);
		}
	}

	main();
})();