var Player = function() {};
var link;

Player.prototype = {
	init: function() {

		// Base stats
		this.health = 3;

	},

  create: function() {

	link = game.add.sprite(50, 150, 'link');
	//player.scale.set(2);
	link.smoothed = false;

  link.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 16, false);
  link.animations.add('up', [12, 13, 14, 15, 16, 17, 18], 16, false);
  link.animations.add('left', [33, 34, 35, 36, 37, 38, 39, 40], 16, false);
  link.animations.add('down', [44, 45, 46, 47, 48, 49, 50, 51], 16, false);

	game.physics.enable(link);
	game.camera.follow(link);
  },

  update: function(){

    link.body.collideWorldBounds = true;

    link.body.velocity.x = 0;
    link.body.velocity.y = 0;

    var speed = 160;

    if (cursors.right.isDown)
    {
        //game.camera.x += 4;
        link.body.velocity.x = +speed;
        link.animations.play('right');
    }

    else if (cursors.up.isDown)
    {
        //game.camera.y -= 4;
        link.body.velocity.y = -speed;
        link.animations.play('up');
    }

    else if (cursors.left.isDown)
    {
        //game.camera.x -= 4;
        link.body.velocity.x = -speed;
        link.animations.play('left');
    }

    else if (cursors.down.isDown)
    {
        //game.camera.y += 4;
        link.body.velocity.y = +speed;
        link.animations.play('down');
    } else {

        link.animations.stop();
    }


  }
}
