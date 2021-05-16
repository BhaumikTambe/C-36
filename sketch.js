var gameState = 0;
var dataBase,playerCount,Form,player,Game;

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    console.log(dataBase);
    Game = new game()
    Game.getState();
    Game.start();
    
}

function draw(){
    background("white");
    drawSprites();
}

