function Game() {}

Game.prototype = {
	start: function() {

		// Create game
		game = new Phaser.Game(64 * 10, 64 * 8, Phaser.CANVAS, 'Zelda Mysteries of PhaserIO');

		// Game states
		game.state.add('boot', BootState);
		game.state.add('preload', PreloadState);
		game.state.add('play', PlayState);

		// Start boot
		game.state.start('boot');
	}
}

window.onload = function() {

	var game = new Game();

	game.start();
}
