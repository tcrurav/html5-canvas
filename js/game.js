window.onload = initialize;

const KEY_W_UP = 119;
const KEY_S_DOWN = 115;
const KEY_A_LEFT = 97;
const KEY_D_RIGHT = 100;

var game;

class Game {
    constructor(player, ctx, canvas, width, height) {
        this.player = player;
        this.ctx = ctx;
        this.canvas = canvas;
        this.width = width;
        this.height = height;
    }
}

class Box {
    constructor(options){
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;
        this.speed = options.speed;
        this.colorText = options.colorText;
    }
}

function initialize() {
    let canvas = document.getElementById("canvas");
    window.addEventListener("keypress", keyDown);

    let x = canvas.width / 2;
    let y = canvas.height / 2;

    let player = new Box({
        x: x, y: y, width: 5, height: 5, color: '#ffff00', speed: 5, colorText: 'green'
    });

    let ctx = canvas.getContext("2d");

    game = new Game(player, ctx, canvas, canvas.width, canvas.height);
}

function draw() {
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
    drawBox();
}

function drawBox() {
    game.ctx.fillStyle = game.player.color;
    game.ctx.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);
    
    // game.ctx.font = '48px serif';
    game.ctx.fillStyle = game.player.colorText;
    game.ctx.fillText("(" + game.player.x + "," + game.player.y + ")", game.player.x, game.player.y);
}

function keyDown(event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case KEY_W_UP:
            if((game.player.y - game.player.speed) >= 0)
                game.player.y -= game.player.speed;
            break;
        case KEY_S_DOWN:
            if((game.player.y + game.player.speed) <= (game.height - game.player.height))
                game.player.y += game.player.speed;
            break;
        case KEY_A_LEFT:
            if((game.player.x - game.player.speed) >= 0)
                game.player.x -= game.player.speed;
            break;
        case KEY_D_RIGHT:
            if((game.player.x + game.player.speed) <= (game.width - game.player.width))
                game.player.x += game.player.speed;
            break;
    }

    draw();
}