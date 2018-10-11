var BootState = function() {};

BootState.prototype = {

	preload: function() {

		// Load assets for loading screen
		this.game.load.image('preload_bar', 'assets/img/preload_bar.png');
	},

	init: function() {

		// Set global variables
		this.setGlobals();

	},

	create: function() {

		game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.setBounds(0, 0, 1280, 960);
    cursors = game.input.keyboard.createCursorKeys();

		// Go to load state
		this.game.state.start('preload');

	},

	setGlobals: function() {

		this.game._tile = 64;

	}

}
