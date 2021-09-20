var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var rockets, rocket1, rocket2, rocket3, rocket4;
var asteroid1, points;
var spacebg, rocket1_img, asteroid, pointsImage;
var rocket2_img, rocket3_img, rocket4_img;

function preload(){
  spacebg = loadImage("images/SPACEBG.jpg");
  rocket1_img = loadImage("images/rocket1.jpg");
  rocket2_img =loadImage("images/rocket1.jpg");
  rocket3_img =loadImage("images/rocket1.jpg");
  rocket4_img =loadImage("images/rocket1.jpg");
  asteroid = loadImage("images/asteroid1.jpg");
  pointsImage = loadImage("images/points.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //background(spacebg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
