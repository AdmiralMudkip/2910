// all the code goes here
// http://paulirish.com/2011/requestanimationframe-for-smart-animating
// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


  
    // set up some initial values
    var WIDTH = 720;
    var HEIGHT = 480;
    // we'll set the rest of these
    // in the init function
    var RATIO = null;
    var currentWidth = null;
    var currentHeight = null;
    var canvas = null;
    var ctx = null;

    var scale = 1;

    //array variables
    var empty = 0;
    var boat = 1;
    var mine = 2;
    var treasure = 3;
    var goal = 4;
    var bar = 9;

    
    //boat directions
    var left = 5;
    var up = 6;
    var right = 7;
    var down = 8;

    //timer things
    var z = 120;
    var treasureGrab = 0;

    //other things

    var nextLevel; //that's some next level stuff right there

    //level 1 array
    var level1 = [  
                    [bar,   bar,        bar,        bar],
                    [bar,   boat,       treasure,   bar],
                    [bar,   mine,       goal,       bar],
                    [bar,   bar,        bar,        bar]
                ];
    var level2 = [ 
                    [bar,   bar,        bar,        bar,      bar,      bar],
                    [bar,   boat,       empty,      mine,     empty,    bar],
                    [bar,   mine,       treasure,   empty,    goal,     bar],
                    [bar,   bar,        bar,        bar,      bar,      bar]
                ];
    var level3 = [  
                    [bar,   bar,        bar,        bar,        bar],
                    [bar,   boat,       mine,       treasure,   bar],
                    [bar,   empty,      empty,      empty,      bar],
                    [bar,   mine,       empty,      goal,       bar],
                    [bar,   bar,        bar,        bar,        bar]
                ];
    var level4 = [  
                    [bar,   bar,        bar,        bar,        bar,        bar],
                    [bar,   boat,       mine,       empty,      treasure,   bar],
                    [bar,   empty,      empty,      empty,      mine,       bar],
                    [bar,   treasure,   mine,       empty,      goal,       bar],
                    [bar,   bar,        bar,        bar,        bar,        bar]
                ];
    var level5 = [
                    [bar,   bar,        bar,        bar,        bar,        bar],
                    [bar,   boat,       empty,      mine,       treasure,   bar],
                    [bar,   mine,       empty,      empty,      empty,      bar],
                    [bar,   empty,      empty,      empty,      empty,      bar],
                    [bar,   treasure,   mine,       empty,      goal,       bar],
                    [bar,   bar,        bar,        bar,        bar,        bar]
                ];
                
    var level6 = [
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar],
                    [bar,   treasure,   empty,      empty,      mine,       mine,       empty,      bar],
                    [bar,   mine,       mine,       empty,      empty,      empty,      empty,      bar],
                    [bar,   boat,       empty,      empty,      mine,       mine,       goal,       bar],
                    [bar,   empty,      mine,       empty,      empty,      treasure,   mine,       bar],
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar]
                ];

    var level7 = [
                    [bar,   bar,        bar,        bar,        bar],
                    [bar,   boat,       empty,      empty,      bar],
                    [bar,   mine,       mine,       empty,      bar],
                    [bar,   empty,      empty,      empty,      bar],
                    [bar,   empty,      mine,       mine,       bar],
                    [bar,   empty,      empty,      empty,      bar],
                    [bar,   treasure,   mine,       goal,       bar],
                    [bar,   bar,        bar,        bar,        bar]
                ];

    var level8 = [
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar,       bar],
                    [bar,   bar,        bar,        treasure,   empty,      empty,      bar,        bar,       bar],
                    [bar,   bar,        bar,        mine,       mine,       empty,      bar,        bar,       bar],
                    [bar,   boat,       empty,      empty,      empty,      empty,      empty,      empty,     bar],
                    [bar,   empty,      mine,       mine,       empty,      mine,       mine,       treasure,  bar],
                    [bar,   bar,        bar,        empty,      empty,      empty,      bar,        bar,       bar],
                    [bar,   bar,        bar,        treasure,   mine,       goal,       bar,        bar,       bar],
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar,       bar]
                ];

    var level9 = [
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar,       bar,       bar],
                    [bar,   empty,      empty,      empty,      empty,      empty,      empty,      mine,      treasure,  bar],
                    [bar,   boat,       mine,       empty,      empty,      mine,       empty,      empty,     empty,     bar],
                    [bar,   mine,       mine,       empty,      empty,      empty,      mine,       mine,      mine,      bar],
                    [bar,   treasure,   empty,      empty,      mine,       empty,      empty,      empty,     goal,      bar],
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar,       bar,       bar]
                ];

    var level10 = [
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar,       bar,       bar],
                    [bar,   mine,       empty,      empty,      treasure,   mine,       empty,      empty,     empty,     bar],
                    [bar,   empty,      empty,      mine,       mine,       empty,      empty,      mine,      empty,     bar],
                    [bar,   empty,      mine,       empty,      empty,      empty,      mine,       empty,     empty,     bar],
                    [bar,   boat,       empty,      empty,      mine,       mine,       mine,       treasure,  mine,      bar],
                    [bar,   empty,      mine,       mine,       empty,      empty,      empty,      mine,      goal,      bar],
                    [bar,   empty,      empty,      empty,      empty,      mine,       empty,      empty,     empty,     bar],
                    [bar,   bar,        bar,        bar,        bar,        bar,        bar,        bar,       bar,       bar]
                ];

    level1.name = "LevelOne";
    level1.width = 2;
    level1.height = 2;

    level2.name = "LevelTwo";
    level2.width = 4;
    level2.height = 2;

    level3.name = "LevelThree";
    level3.width = 3;
    level3.height = 3;
    
    level4.name = "LevelFour";
    level4.width = 4;
    level4.height = 3;
    
    level5.name = "LevelFive";
    level5.width = 4;
    level5.height = 4;

    level6.name = "LevelSix";
    level6.width = 6;
    level6.height = 4;

    level7.name = "LevelSeven";
    level7.width = 3;
    level7.height = 6;

    level8.name = "LevelEight";
    level8.width = 7;
    level8.height = 6;

    level9.name = "LevelNine";
    level9.width = 8;
    level9.height = 4;

    level10.name = "LevelTen";
    level10.width = 8;
    level10.height = 6;

    function init() {

        // the proportion of width to height
        RATIO = WIDTH / HEIGHT;
        // these will change when the screen is resized
        window.currentWidth = window.WIDTH;
        window.currentHeight = window.HEIGHT;
        // this is our canvas element
        window.canvas = document.getElementsByTagName('canvas')[0];
        // setting this is important
        // otherwise the browser will
        // default to 320 x 200
        window.canvas.width = window.WIDTH;
        window.canvas.height = window.HEIGHT;
        // the canvas context enables us to 
        // interact with the canvas api
        window.ctx = window.canvas.getContext('2d');

        // we're ready to resize
        window.resize();
        window.resize();

        // we need to sniff out Android and iOS
        // so that we can hide the address bar in
        // our resize function
        window.ua = navigator.userAgent.toLowerCase();
        window.android = window.ua.indexOf('android') > -1 ? true : false;
        window.ios = (window.ua.indexOf('iphone') > -1 || window.ua.indexOf('ipad') > -1) ?
		true : false;

        // listen for clicks
        window.addEventListener('click', function (e) {
            e.preventDefault();
            
            //window.Input.set(e);
        }, false);

        // listen for touches
        window.addEventListener('touchstart', function (e) {
            e.preventDefault();
            // the event object has an array
            // named touches; we just want
            // the first touch
            window.Input.set(e.touches[0]);
        }, false);

        window.addEventListener('touchmove', function (e) {
            // we're not interested in this,
            // but prevent default behaviour
            // so the screen doesn't scroll
            // or zoom
            e.preventDefault();
        }, false);

        window.addEventListener('touchend', function (e) {
            // as above
            e.preventDefault();
        }, false);

        //startLevel(level1);
        StartMenu();
    };

    function resize() {

        window.currentHeight = window.innerHeight;
        // resize the width in proportion
        // to the new height
        window.currentWidth = window.currentHeight * window.RATIO;

        // this will create some extra spaaaaaace on the
        // page, allowing us to scroll past
        // the address bar, thus hiding it.
        if (window.android || window.ios) {
            document.body.style.height = (window.innerHeight + 50) + 'px';
        }

        // set the new canvas style width and height
        // note: our canvas is still 320 x 480, but
        // we're essentially scaling it with CSS
        window.canvas.style.width = window.currentWidth + 'px';
        window.canvas.style.height = window.currentHeight + 'px';

        // we use a timeout here because some mobile
        // browsers don't fire if there is not
        // a short delay
        window.setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1);
    };

    //when you click the level you wish to play this runs
    function startLevel(level) {

        var currentLevel;
        var i,j,x;
        var boatCurrentDir;
        
        var treasureGrabbed = 0;
        var boatLocX = 1;
        var boatLocY = 1;
        
        var score = 0;
        
        var mineX = [];
        var mineY = [];
        
        var treasureX = [null];
        var treasureY = [null];
        
        var currentHighScore;  //to check if the score is higher than this and then POST it to the database
        
        currentLevel = null;
        currentLevel = level.slice(0);
        
        currentLevel.name = level.name;
                
        //conditional to check what level the player is on, and then sets drawing variables, next level, and mine placements
        //array (mine and treasure) variables have to be .5 higher than what their position is.  That's how this works, and I don't feel like fixing it.  
        if (level == level1) { 
            boatDrawX = 265;
            boatDrawY = 115;
            mineX[0] = 1.5;
            mineY[0] = 1.5;
            treasureX[0] = 2.5;
            treasureY[0] = 1.5;
            currentHighScore = 145;
            nextLevel = level2;
        } else if (level == level2) {
            boatDrawX = 200;
            boatDrawY = 120;
            mineX = [1.5, 3.5];//fill the mine/treasure arrays like this instead
            mineY = [1.5, 0.5];
            treasureX[0] = 2.5;
            treasureY[0] = 2.5;
            currentHighScore = 143;
            nextLevel = level3;
        } else if (level == level3) {
            boatDrawX = 232;
            boatDrawY = 117;
            nextLevel = level4;
        } else if (level == level4) {
            boatDrawX = 199;   
            boatDrawY = 117;
            nextLevel = level5;
        } else if (level == level5) {
            boatDrawX = 232;
            boatDrawY = 53;
            nextLevel = level6;
        } else if (level == level6) {
            
            nextLevel = level7;
        } else if (level == level7) {
         
            nextLevel = level8;
        } else if (level == level8) {
            
            nextLevel = level9;
        } else if (level == level9) {
            
            nextLevel = level10;
        } else if (level == level10) {
            
            
        } else {
               
        }
        
        levelBackground(currentLevel);
        
        drawAll(currentLevel, mineX, mineY, boatDrawX, boatDrawY, boatLocX, boatLocY, treasureX, treasureY);
        
        var boatMoveSound = boatSound();
        var music = backgroundMusic(currentLevel);
        var loss = loseSound();
        var win = winSound();
        
        //music.addEventListener('ended', function() {
        //    this.currentTime = 0;
        //    this.play();
        //}, false);

        //music.play();
        //currently breaks things for some reason
        
        
        window.addEventListener('keydown', movement, false);
        
        //listeners for leopard input
        function movement(e) {
            
                if (e.keyCode == '38' ) {
                    //up arrow
                    moveUp();
                }
                else if (e.keyCode == '40') {
                    // down arrow
                    moveDown();
                }
                else if (e.keyCode == '37') {
                    // left arrow
                    moveLeft();
                }
                else if (e.keyCode == '39') {
                    // right arrow
                    moveRight();    
                }
        }
        
        function checkLeft() {
            return currentLevel[boatLocX][boatLocY - 1];
        }
        function checkRight() {
            return currentLevel[boatLocX][boatLocY + 1];
        }
        function checkUp() {
            return currentLevel[boatLocX - 1][boatLocY];
        }
        function checkDown() {
            return currentLevel[boatLocX + 1][boatLocY];
        }
        
        function moveLeft() {
            if(checkLeft() != bar) {
                //boat moving left anim func
                boatCurrentDir = left;
                if(checkLeft() == treasure) {
                    //boat gets treasure anim func
                    scoreIncrease(boatLocX, boatLocY, treasureX, treasureY);
                }

                else if(checkLeft() == mine) {
                    //boat explodes func
                    loser(movement, loss, level);
                    loss.play();
                    return;
                }

                else if(checkLeft() == goal) {
                    //winning anim function
                    win.play();
                    winner(movement, currentHighScore);
                    return;
                }
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocY -= 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY);
                boatMoveSound.play();
                
            } 

        }

        function moveRight() {
            if(checkRight() != bar) {
                //boat moving right anim func
                boatCurrentDir = right;
                if(checkRight() == treasure) {
                    //boat gets treasure anim func
                    scoreIncrease(boatLocX, boatLocY, treasureX, treasureY);
                }

                if(checkRight() == mine) {
                    //boat explodes func
                    loser(movement, loss, level);
                    loss.play();
                    return;
                }

                if(checkRight() == goal) {
                    //winning anim function
                    win.play();
                    winner(movement, currentHighScore);
                    return;
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocY += 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY);
                boatMoveSound.play();
                
            } 
        }

        function moveUp() {
            if(checkUp() != bar) {
                //boat moving up anim func
                boatCurrentDir = up;
                if(checkUp() == treasure) {
                    //boat gets treasure anim func
                    scoreIncrease(boatLocX, boatLocY, treasureX, treasureY);
                }

                if(checkUp() == mine) {
                    //boat explodes func
                    loser(movement, loss, level);
                    loss.play();
                    return;
                }

                if(checkUp() == goal) {
                    //winning anim function
                    win.play();
                    winner(movement, currentHighScore);
                    return;
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocX -= 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY);
                boatMoveSound.play();
                
            } 
        }

        function moveDown() {
            if(checkDown() != bar) {
                //boat moving left anim func
                boatCurrentDir = down;
                if(checkDown() == treasure) {
                    
                    scoreIncrease(boatLocX, boatLocY, treasureX, treasureY);
                }

                if(checkDown() == mine) {
                    //boat explodes func
                    loser(movement, loss, level);
                    loss.play();
                    //window.removeEventListener('keydown', movement, false);
                    return;
                }

                if(checkDown() == goal) {
                    //winning anim function
                    win.play();
                    winner(movement, currentHighScore);
                    return;
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocX += 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY);
                boatMoveSound.play();
                
            } 
        }
        
        
    };
    
//function to draw the mines, boat, treasure.  Mines run with two separate timers, 
    function drawAll(level, mineX, mineY, boatDrawX, boatDrawY, boatLocX, boatLocY, treasureX, treasureY) {
        
        var mineImg = new Image();
        mineImg = document.getElementById("barrel");
        var width = 52;
        var height = 115;
        var count = 1;
        var count2 = 0;
        var i = 0;
        var sheetY;
        
        var outerLoop = setInterval(function(){
            var interval = setInterval(function (){ 
                if (count < 20) {
                sheetY = (count * 115);
                barrelRender(mineImg, mineX, mineY, boatDrawX, boatDrawY, i, sheetY, width, height, level)
                count++;   
                } else if (count >= 20) {
                    clearInterval(interval);
                    count2++;
                    i++;
                } 
            }, 100)
            
            if (count2 >= mineX.length){
                clearInterval(outerLoop);   
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY);
                mili = 0;
                sec = 0;
            } else if (count2 < mineX.length) {
                count = 0;
            }
        }, 2200);
        };
    
    function barrelRender(mineImg, mineX, mineY, boatDrawX, boatDrawY, i, sheetY, width, height, level) {
        levelBackground(level);
        
        var xPos = (((mineX[i] - 1) * 64) + boatDrawX);
        var yPos = (((mineY[i] - 1) * 64) + boatDrawY);
        
        window.ctx.drawImage(mineImg, 0, sheetY, width, height, xPos, yPos, width, height);
        };
    
    function drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY) {
        
        for (var i = 0; i < treasureX.length; i++) {
            if (treasureX[i] != 0) {
            var xPos = (((treasureX[i] - 1) * 64) + boatDrawX);
            var yPos = (((treasureY[i] - 1) * 64) + boatDrawY);
           window.ctx.drawImage(document.getElementById("treasure"), xPos, yPos);
            }
        }
    }
    
    //draws the level background
    function levelBackground(level) {
        window.ctx.drawImage(document.getElementById("" + level.name), 0, 0, window.canvas.width, window.canvas.height);
    };

    //boat moving sound
    function boatSound() {
        return new Audio("sound/oarswater-000.wav", true);
    }
    function winSound() {
        return new Audio("sound/Win.mp3", true);
    }
    
     function loseSound() {
		var gameOver = Math.floor(Math.random() * 11) + 1
		switch (gameOver) {
    case 1:
        return new Audio("sound/loss01.mp3", true);    
        break;
    case 2:
         return new Audio("sound/loss02.mp3", true);   
        break;
    case 3:
        return new Audio("sound/loss03.mp3", true);   
        break;
    case 4:
        return new Audio("sound/loss04.mp3", true);   
        break;
    case 5:
        return new Audio("sound/loss05.mp3", true);   
        break;
    case 6:
        return new Audio("sound/loss06.mp3", true);   
        break;
    case 7:
        return new Audio("sound/loss07.mp3", true);   
        break;
    case 8:
        return new Audio("sound/loss08.mp3", true);   
        break;
	case 9:
        return new Audio("sound/loss09.mp3", true);   
        break;
	case 10:
        return new Audio("sound/loss10.mp3", true);   
        break;
	case 11:
        return new Audio("sound/loss11.mp3", true);   
        break;
    case 12:
        return new Audio("sound/loss12.mp3", true);   
        break;
    case 13:
        return new Audio("sound/loss13.mp3", true);   
        break;
    case 14:
        return new Audio("sound/loss14.mp3", true);   
        break;
}
         
    }

    //background music depending on where you are in the game
    function backgroundMusic(location) {
        if(location.name == "LevelOne") {
            return new Audio("sound/background.mp3", true);
        }
    }
    
        function winner(movement, currentHighScore) {
                    var y = document.getElementById("seconds").innerHTML;
                    var z = document.getElementById("milliseconds").innerHTML;
                    var score = 100 - (10 * y) - (1 * z) + (treasureGrab * 50);
                    if (score < 0) {
                        score = 0;   
                    }
                    
                    if (score > currentHighScore) {
                        console.log("test");   
                    }
            
                    alert('Your score was: ' + score);
                    sec = 0;
                    
            startLevel(nextLevel);
            window.removeEventListener('keydown', movement, false);
            return null;
        }

        function loser(movement, loss, currentLevel) {
            loss.play();
            startLevel(currentLevel);
            window.removeEventListener('keydown', movement, false);
        }

        function scoreIncrease(boatLocX, boatLocY, treasureX, treasureY) {
            for (var i = 0; i < treasureX.length; i++) {
                if ((boatLocX + 1.5) == treasureX[i] && (boatLocY + 0.5) == treasureY[i]) {
                    treasureX[i] = 0;
                    treasureY[i] = 0;
                }
            }
            
            treasureGrab += 1;
        }

// abstracts various canvas operations into standalone functions
window.Draw = {

    clear: function () {
        window.ctx.clearRect(0, 0, window.WIDTH, window.HEIGHT);
    },

    rect: function (x, y, w, h, col) {
        window.ctx.fillStyle = col;
        window.ctx.fillRect(x, y, w, h);
    },

    circle: function (x, y, r, col) {
        window.ctx.fillStyle = col;
        window.ctx.beginPath();
        window.ctx.arc(x, y, r, 0, Math.PI * 2, true);
        window.ctx.closePath();
        window.ctx.fill();
    },

    text: function (string, x, y, size, col) {
        window.ctx.font = 'bold ' + size + 'px Monospace';
        window.ctx.fillStyle = col;
        window.ctx.fillText(string, x, y);
    }


};

window.addEventListener('load', window.init, false);
window.addEventListener('resize', window.resize, false);