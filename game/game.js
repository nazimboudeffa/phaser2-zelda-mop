var game;
var map;
var layer1, layer2, layer3;
var player;
var cursors;
//640x480
game = new Phaser.Game(640, 360, Phaser.CANVAS, 'Zelda Mysteries of Phaser CE', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.tilemap('map', 'assets/tiles/light_world.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('light_world', 'assets/tiles/light_world.tiles.png');
    game.load.spritesheet('link', 'assets/sprites/walking.tunic.png', 24, 32, 55);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

//World
    map = game.add.tilemap('map');
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

//  game.world.setBounds(0, 0, 1280, 960);
    game.world.setBounds(0, 0, 4096, 4096);


//Player
    player = game.add.sprite(196, 1939, 'link');
    //player.scale.set(2);
    player.smoothed = false;

//As the order of the layers is important it's also important here
//to call it after the sprite
    layer3 = map.createLayer('Calque 3');

    player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7], 16, false);
    player.animations.add('up', [12, 13, 14, 15, 16, 17, 18], 16, false);
    player.animations.add('left', [33, 34, 35, 36, 37, 38, 39, 40], 16, false);
    player.animations.add('down', [44, 45, 46, 47, 48, 49, 50, 51], 16, false);

    game.physics.enable(player);
    game.camera.follow(player);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
    game.physics.arcade.collide(player, layer2);
    player.body.collideWorldBounds = true;

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
