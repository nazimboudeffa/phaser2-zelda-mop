var game;

game = new Phaser.Game(640, 480, Phaser.CANVAS, 'Zelda Mystery of Phaser CE', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.spritesheet('link', '../assets/sprites/walking.tunic.png', 24, 32, 55);
}

function create() {

//Player
    player = game.add.sprite(50, 150, 'link');

}

function update() {

}

function render() {

}
