var game;
var player;
var cursors;

game = new Phaser.Game(640, 480, Phaser.CANVAS, 'Zelda Mystery of Phaser CE', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.spritesheet('link', '../assets/sprites/walking.tunic.png', 24, 32, 55);
}

function create() {

//Player
    player = game.add.sprite(50, 150, 'link');
    //player.scale.set(2);
    player.smoothed = false;

    player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 16, false);
    player.animations.add('up', [12, 13, 14, 15, 16, 17, 18], 16, false);
    player.animations.add('left', [33, 34, 35, 36, 37, 38, 39, 40], 16, false);
    player.animations.add('down', [44, 45, 46, 47, 48, 49, 50, 51], 16, false);

    game.physics.enable(player);
    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    player.body.velocity.x = 0;
    player.body.velocity.y = 0;

    var speed = 160;

    if (cursors.right.isDown)
    {
        game.camera.x += 4;
        player.body.velocity.x = +speed;
        player.animations.play('right');
    }

    else if (cursors.up.isDown)
    {
        game.camera.y -= 4;
        player.body.velocity.y = -speed;
        player.animations.play('up');
    }

    else if (cursors.left.isDown)
    {
        game.camera.x -= 4;
        player.body.velocity.x = -speed;
        player.animations.play('left');
    }

    else if (cursors.down.isDown)
    {
        game.camera.y += 4;
        player.body.velocity.y = +speed;
        player.animations.play('down');
    } else {

        player.animations.stop();
    }

}

function render() {

    game.debug.spriteInfo(player, 20, 32);

}
