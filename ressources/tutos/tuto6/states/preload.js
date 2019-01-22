var PreloadState = function() {};

PreloadState.prototype = {
	preload: function() {

		game.load.tilemap('hyrule', '../assets/maps/hyrule.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('light_world', 'assets/maps/light_world.tiles.png');
		game.load.spritesheet('link', 'assets/sprites/walking.tunic.png', 24, 32, 55);

		// Loading label
		var loadingLabel = this.game.add.text(this.game.canvas.width / 2, 300, 'Loading Game...', {fill: '#FFFFFF'});
		loadingLabel.anchor.setTo(0.5);

		//show percentage
		this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 60, '0%', {fill: '#FFFFFF'});
		this.progress.anchor.setTo(0.5);

  },

  create: function() {

  	this.game.state.start('play');

  }
}
