function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(0);
  gameWindow();
}

function gameWindow(){
  stroke(255);
  fill(0);
  rect(windowWidth/2, windowHeight/2, 1080, 720);
  text("ˆ¬˚",100,100);
}

function loadLevel(){}

function overworldLevel(){}
function underworldLevel(){}
function fireLevel(){}
function waterLevel(){}
function iceLevel(){}
function earthLevel(){}
function rockLevel(){}
function airLevel(){}
function finalLevel(){}