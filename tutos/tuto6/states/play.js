var PlayState = function() {};

PlayState.prototype = {
	init: function() {

		// Game stats for local storage, rewards and win/loss screen
		this.gameStats = {
			health : 3
		};

	},

  create: function() {

		//World
		    map = game.add.tilemap('hyrule');
		    map.addTilesetImage('light_world.tiles', 'light_world');


		// Order of layer in tile editor is important for collision
		    layer1 = map.createLayer('Calque de Tile 1');
		    layer2 = map.createLayer('Calque 2');

		    layer1.resizeWorld();

		//The big tree i didn't uses a collision for the little trees yet
		    map.setCollisionBetween(1078, 1085, true, layer2);//look at the id in tiled on the spritesheet
		    map.setCollisionBetween(1174, 1181, true, layer2);
		    map.setCollisionBetween(1271, 1276, true, layer2);
		    map.setCollisionBetween(1369, 1370, true, layer2);

		//Playerand
				player = new Player();
				player.create();

		//As the order of the layers is important it's also important here
		//to call it after the sprite
		    layer3 = map.createLayer('Calque 3');

  },

	update: function(){
		game.physics.arcade.collide(player, layer2);
		player.update();
	}
}
