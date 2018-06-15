var game;
var player;
var cursors;
var container;

game = new Phaser.Game(640, 480, Phaser.CANVAS, 'Zelda Mysteries of PhaserIO', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.spritesheet('link', 'assets/sprites/walking.tunic.png', 24, 32, 55);
    game.load.image('container', 'assets/sprites/dialog.png');
    game.load.image('linkFace', 'assets/sprites/link-005.png');
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

//https://www.rockpapershotgun.com/2017/02/13/stardew-valley-marriage-work/?utm_content=buffer7b943&utm_medium=social&utm_source=twitter.com&utm_campaign=buffer
//http://www.html5gamedevs.com/topic/17670-chatboxdialoguebubble-box-above-character/
    container = game.add.sprite(100, 100, 'container');
    container.scale.setTo(1);
    container.alpha = 0.8;
    //container.visible = false;
    var text = game.add.text(20, 20, 'Hello my name is Link', {font: 'bold 10px Arial', fill: '#FFFFFF'});
    text.wordWrapWidth = '580'; //width of container
    text.inputEnabled = true;
    //text2.events.onInputDown.add(closeContainer, this);
    container.addChild(text);
    //chat.inputEnabled = true;
    //chat.events.onInputDown.add(listener, this);
    var face = game.add.sprite(250, 20, 'linkFace');
    face.scale.setTo(1);
    container.addChild(face);

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
