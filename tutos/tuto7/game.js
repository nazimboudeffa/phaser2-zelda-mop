var game;
var player;
var cursors;
var container;
var textObject;

game = new Phaser.Game(640, 480, Phaser.CANVAS, 'Zelda Mystery of Phaser CE', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('container', '../assets/sprites/dialog_box.png');
    game.load.bitmapFont('desyrel', '../assets/fonts/desyrel.png', '../assets/fonts/desyrel.xml');
}

function create() {

    container = game.add.sprite(100, 100, 'container');
    container.scale.setTo(1);
    container.alpha = 0.8;

    var message = 'Hello my name is Link';
    textObject = game.add.bitmapText(100, 100, 'desyrel', message, 20);

    displayLetterByLetterText(textObject, message, function() {
    // stuff you want to do at the end of the animation
    // eg. this.input.onDown.addOnce(this.start, this);
    });

}

function displayNextLetter() {

    this.textObject.text = this.message.substr(0, this.counter);
    this.counter += 1;

}

function displayLetterByLetterText(textObject, message, onCompleteCallback) {

    var timerEvent = game.time.events.repeat(80, message.length, displayNextLetter,
                                { textObject: textObject, message: message, counter: 1 });

    timerEvent.timer.onComplete.addOnce(onCompleteCallback, this);

}

function update() {

}

function render() {

}
