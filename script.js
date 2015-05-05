var canvas = $("#canvas")[0];
var ctx = canvas.getContext("2d");
var w = $("#canvas").width();
var h = $("#canvas").height();

ctx.fillStyle = "white";
ctx.fillRect(0, 0, w, h);
ctx.strokeStyle = "black";
ctx.strokeRect(0, 0, w, h);


var grid_array;
var boat_location;

//variables to store in the array
var empty = 0;
var boat = 1;
var mine = 2;
var treasure = 3;
var goal = 4;


//level arrays
//each segment is a row
var level1 = [[boat,empty],[mine,goal]];

// game logic functions
function generate_mines(){
    
}

function checkLocation(){

}

function win(){
    
}

function loss(){
    
}
function moveLeft(){
    
}

function moveRight(){
    
}

function moveUp(){
    
}

function moveDown(){
    
}

// ui functions

function toMainMenu(){
    
}

function toLevelSelect(){
    
}

function toHighScores(){
    
}

