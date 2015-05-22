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

        //startLevel(level10);
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
            mineX = [1];
            mineY = [2];
            treasureX = [2];
            treasureY = [1];
            currentHighScore = 145;
            nextLevel = level2;
        } else if (level == level2) {
            boatDrawX = 200;
            boatDrawY = 120;
            mineX = [1, 3];//fill the mine/treasure arrays like this instead
            mineY = [2, 1];
            treasureX = [2];
            treasureY = [2];
            currentHighScore = 143;
            nextLevel = level3;
        } else if (level == level3) {
            boatDrawX = 232;
            boatDrawY = 117;
            mineX = [2, 1];
            mineY = [1, 3];
            treasureX = [3];
            treasureY = [1];
            nextLevel = level4;
        } else if (level == level4) {
            boatDrawX = 199;   
            boatDrawY = 117;
            mineX = [2, 4, 2];
            mineY = [1, 2, 3];
            treasureX = [1, 4];
            treasureY = [3, 1];
            nextLevel = level5;
        } else if (level == level5) {
            boatDrawX = 232;
            boatDrawY = 53;
            mineX = [1, 2, 3];
            mineY = [2, 4, 1];
            treasureX = [1, 4];//1,1 and 4
            treasureY = [1, 4];
            nextLevel = level6;
            nextLevel = level6;
        } else if (level == level6) {
            boatDrawX = 135;
            boatDrawY = 50;
            boatLocY = 3;
            mineX = [1, 2, 2, 4, 4, 5, 5, 6];
            mineY = [2, 2, 4, 1, 3, 1, 3, 4];
            treasureX = [1, 5];
            treasureY = [1, 4];
            nextLevel = level7;
        } else if (level == level7) {
            boatDrawX = 232;
            boatDrawY = -12;
            mineX = [1, 2, 2, 2, 3];
            mineY = [2, 2, 4, 6, 4];
            treasureX = [1];
            treasureY = [6];
            nextLevel = level8;
        } else if (level == level8) {
            boatDrawX = 102;
            boatDrawY = -12;
            boatLocY = 3;
            mineX = [2, 3, 3, 4, 4, 5, 6];
            mineY = [4, 2, 4, 2, 6, 4, 4];
            treasureX = [3, 3, 7];
            treasureY = [1, 6, 4];
            nextLevel = level9;
        } else if (level == level9) {
            boatDrawX = 70;
            boatDrawY = 50;
            boatLocY = 2;
            mineX = [1, 2, 2, 4, 5, 6, 7, 7, 8];
            mineY = [3, 2, 3, 4, 2, 3, 1, 3, 3];
            treasureX = [1, 8];
            treasureY = [4, 1];
            nextLevel = level10;
        } else if (level == level10) {
            boatDrawX = 70;
            boatDrawY = -12;
            boatLocY = 4;
            mineX = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8];
            mineY = [1, 3, 5, 2, 5, 2, 4, 1, 4, 6, 3, 4, 2, 5, 4];
            treasureX = [4, 7];
            treasureY = [1, 4];
        } else {
               
        }
        
        levelBackground(currentLevel);
        
        drawAll(currentLevel, mineX, mineY, boatDrawX, boatDrawY, boatLocX, boatLocY, treasureX, treasureY);
        
        var boatMoveSound = boatSound();
        var music = backgroundMusic(currentLevel);
        var loss = loseSound();
        
        //music.addEventListener('ended', function() {
        //    this.currentTime = 0;
        //    this.play();
        //}, false);

        //music.play();
        //currently breaks things for some reason
        
        
        window.addEventListener('keydown', movement, false);
        window.addEventListener('click', click, false);
        //listeners for leopard input
        function movement(e) {
            
                if (e.keyCode == '38' ) {
                    moveUp();
                }
                else if (e.keyCode == '40') {
                    moveDown();   
                }
                else if (e.keyCode == '37') { 
                    moveLeft(); 
                }
                else if (e.keyCode == '39') { 
                    moveRight();
                }
        }
        
        function click(e) {
            var x = getXPosition(canvas);
            var y = getYPosition(canvas);
            var z = ctx.canvas.style.width;
            var zz = ctx.canvas.style.height;
            var z = parseInt(z);
            var zz = parseInt(zz);
            var aa = ((e.x / z) * 720);
            var bb = ((e.y / zz) * 480);
            //can you tell this is last minute yet?
                   
                       if (aa > (((boatLocY - 1) * 64) + boatDrawX + x) && aa < (((boatLocY - 1) * 64) + boatDrawX + x + 22) && bb > (((boatLocX - 1) * 64) + boatDrawY + y) && bb < (((boatLocX - 1) * 64) + boatDrawY + y + 38)){      
                    moveUp();
                } else if (aa > (((boatLocY - 1) * 64) + boatDrawX + x) && aa < (((boatLocY - 1) * 64) + boatDrawX + x + 22) && bb > (((boatLocX - 1) * 64) + boatDrawY + y + 75) && bb < (((boatLocX - 1) * 64) + boatDrawY + y + 113)){
                    moveDown();
                } else if (aa > (((boatLocY - 1) * 64) + boatDrawX + x - 57) && aa < (((boatLocY - 1) * 64) + boatDrawX + x - 22) && bb > (((boatLocX - 1) * 64) + boatDrawY + y + 50) && bb < (((boatLocX - 1) * 64) + boatDrawY + y + 73)) {
                    moveLeft();
                } else if (aa > (((boatLocY - 1) * 64) + boatDrawX + x + 40) && aa < (((boatLocY - 1) * 64) + boatDrawX + x + 72) && bb > (((boatLocX - 1 ) * 64) + boatDrawY + y + 50) && bb < (((boatLocX - 1) * 64) + boatDrawY + y + 73)) { 
                    moveRight(); 
               }
        }
            
        function checkLeft() {
            return currentLevel[boatLocY][boatLocX - 1];
        }
        function checkRight() {
            return currentLevel[boatLocY][boatLocX + 1];
        }
        function checkUp() {
            return currentLevel[boatLocY - 1][boatLocX];
        }
        function checkDown() {
            return currentLevel[boatLocY + 1][boatLocX];
        }
        
        function moveLeft() {
            if(checkLeft() != bar) {
                //boat moving left anim func
                boatCurrentDir = left;
                if(checkLeft() == treasure) {
                    //boat gets treasure anim func
                    scoreIncrease((boatLocX - 1), boatLocY, treasureX, treasureY);
                }

                else if(checkLeft() == mine) {
                    //boat explodes func
                    boatLocX -= 1;
                    levelBackground(currentLevel);
                    
                    window.ctx.drawImage(document.getElementById("explosion"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                    loser(movement, loss, level);
                    loss.play();
                    return;
                }

                else if(checkLeft() == goal) {
                    //winning anim function
                    winner(movement, currentHighScore);
                    return;
                }
                
                currentLevel[boatLocY][boatLocX] = empty;
                boatLocX -= 1;
                currentLevel[boatLocY][boatLocX] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                
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
                    scoreIncrease((boatLocX + 1), boatLocY, treasureX, treasureY);
                }

                if(checkRight() == mine) {
                    //boat explodes func
                    levelBackground(currentLevel);
                    boatLocX += 1;
                   
                    window.ctx.drawImage(document.getElementById("explosion"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                    //loser(movement, loss, level);
                    loss.play();
                    return;
                }

                if(checkRight() == goal) {
                    //winning anim function
                    winner(movement, currentHighScore);
                    return;
                }
                
                
                currentLevel[boatLocY][boatLocX] = empty;
                boatLocX += 1;
                currentLevel[boatLocY][boatLocX] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                
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
                    scoreIncrease(boatLocX, (boatLocY - 1), treasureX, treasureY);
                }

                if(checkUp() == mine) {
                    //boat explodes func
                    levelBackground(currentLevel);
                    boatLocY -= 1;
                    
                    window.ctx.drawImage(document.getElementById("explosion"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                    loser(movement, loss, level);
                    loss.play();
                    return;
                }

                if(checkUp() == goal) {
                    //winning anim function
                    winner(movement, currentHighScore);
                    return;
                }
                
                
                currentLevel[boatLocY][boatLocX] = empty;
                boatLocY -= 1;
                currentLevel[boatLocY][boatLocX] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                
                drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY);
                boatMoveSound.play();
                
            } 
        }

        function moveDown() {
            if(checkDown() != bar) {
                //boat moving left anim func
                boatCurrentDir = down;
                if(checkDown() == treasure) {
                    scoreIncrease(boatLocX, (boatLocY + 1), treasureX, treasureY);
                }

                if(checkDown() == mine) {
                    //boat explodes func
                    levelBackground(currentLevel);
                    boatLocY += 1;
                    
                    window.ctx.drawImage(document.getElementById("explosion"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                    loser(movement, loss, level);
                    loss.play();
                    //window.removeEventListener('keydown', movement, false);
                    return;
                }

                if(checkDown() == goal) {
                    //winning anim function
                    winner(movement, currentHighScore);
                    return;
                }
                
                
                currentLevel[boatLocY][boatLocX] = empty;
                boatLocY += 1;
                currentLevel[boatLocY][boatLocX] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                
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
                drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
                
                mili = 0;
                sec = 0;
            } else if (count2 < mineX.length) {
                count = 0;
            }
        }, 2200);
        };
    
    function barrelRender(mineImg, mineX, mineY, boatDrawX, boatDrawY, i, sheetY, width, height, level) {
        levelBackground(level);
        
        var xPos = (((mineX[i] - 1) * 64) + boatDrawX + 32);
        var yPos = (((mineY[i] - 1) * 64) + boatDrawY - 32);
        
        window.ctx.drawImage(mineImg, 0, sheetY, width, height, xPos, yPos, width, height);
        };
    
    function drawTreasure(treasureX, treasureY, boatDrawX, boatDrawY) {
        for (var i = 0; i < treasureX.length; i++) {
            if (treasureX[i] != 0) {
            var xPos = (((treasureX[i] - 1) * 64) + boatDrawX + 32);
            var yPos = (((treasureY[i] - 1) * 64) + boatDrawY + 32);
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
    
    function loseSound() {
        return new Audio("sound/button.mp3", true);     
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
                if (boatLocX == treasureX[i] && boatLocY == treasureY[i]) {
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