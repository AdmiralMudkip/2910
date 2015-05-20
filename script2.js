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
                    [bar,   mine,       empty,      empty,    goal,     bar],
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
    level5.width = 4;

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

        startLevel(level1);
        //StartMenu();
    };

    function resize() {

        window.currentHeight = window.innerHeight;
        // resize the width in proportion
        // to the new height
        window.currentWidth = window.currentHeight * window.RATIO;

        // this will create some extra space on the
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
        
        
        currentLevel = null;
        currentLevel = level.slice(0);
        
        boatCurrentDir = right;
        currentLevel.name = level.name;
        //we don't need this because in the conditionals we can set the starting location of the boat manually.  
        //for (i = 0; i < currentLevel.length; i++) {
        //    for (j = 0; j < currentLevel[0].length; j++) {
        //        if (currentLevel[i][j] == boat) {
        //            boatLocX = i;
        //            boatLocY = j;
        //        }
        //    }
        //}

        
        
        
        //conditional to check what level the player is on, and then sets drawing variables, next level, and mine placements
        if (level == level1) { 
            boatDrawX = 265;
            boatDrawY = 115;
            mineX[0] = 0;
            mineY[0] = 1;
            nextLevel = level2;
        } else if (level == level2) {
            boatDrawX = 200;
            boatDrawY = 120;
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
        }
        
        levelBackground(currentLevel);
        
        drawMines(currentLevel, mineX, mineY, boatDrawX, boatDrawY);
        
        var boatMoveSound = boatSound();
        var music = backgroundMusic(currentLevel);
        var loss = loseSound();
        
        //music.addEventListener('ended', function() {
        //    this.currentTime = 0;
        //    this.play();
        //}, false);

        //music.play();
        //currently breaks things for some reason
        window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + boatDrawX), (((boatLocY - 1) * 64) + boatDrawY));
        
        window.addEventListener('keydown', movement, false);
        
        //listeners for keyboard input
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
                    scoreIncrease();
                }

                else if(checkLeft() == mine) {
                    //boat explodes func
                    loser(movement, loss, currentLevel);
                    loss.play();
                    return;
                }

                else if(checkLeft() == goal) {
                    //winning anim function
                    winner(movement);
                    return;
                }
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocY -= 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                boatMoveSound.play();
                
            } 

        }

        function moveRight() {
            if(checkRight() != bar) {
                //boat moving right anim func
                boatCurrentDir = right;
                if(checkRight() == treasure) {
                    //boat gets treasure anim func
                    scoreIncrease();
                }

                if(checkRight() == mine) {
                    //boat explodes func
                    loser(movement, loss, currentLevel);
                    loss.play();
                    return;
                }

                if(checkRight() == goal) {
                    //winning anim function
                    winner(movement);
                    return;
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocY += 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                boatMoveSound.play();
                
            } 
        }

        function moveUp() {
            if(checkUp() != bar) {
                //boat moving up anim func
                boatCurrentDir = up;
                if(checkUp() == treasure) {
                    //boat gets treasure anim func
                    scoreIncrease();
                }

                if(checkUp() == mine) {
                    //boat explodes func
                    loser(movement, loss, currentLevel);
                    loss.play();
                    return;
                }

                if(checkUp() == goal) {
                    //winning anim function
                    winner(movement);
                    return;
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocX -= 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                boatMoveSound.play();
                
            } 
        }

        function moveDown() {
            if(checkDown() != bar) {
                //boat moving left anim func
                boatCurrentDir = down;
                if(checkDown() == treasure) {
                    //boat gets treasure anim func
                    scoreIncrease();
                }

                if(checkDown() == mine) {
                    //boat explodes func
                    loser(movement, loss, currentLevel);
                    loss.play();
                    //window.removeEventListener('keydown', movement, false);
                    return;
                }

                if(checkDown() == goal) {
                    //winning anim function
                    winner(movement);
                    return;
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocX += 1;
                currentLevel[boatLocX][boatLocY] = boat;
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + boatDrawX), (((boatLocX - 1) * 64) + boatDrawY));
                boatMoveSound.play();
                
            } 
        }
        
        
    };
    

    function drawMines(level, mineX, mineY, boatDrawX, boatDrawY) {
        
        var mineImg = new Image();
        mineImg = document.getElementById("barrel");
        var width = 52;
        var height = 115;
        var count = 1;
        console.log(mineX.length);
            for (var i = 0; i < mineX.length; i++){ 
            var sheetY = (i * 115);
                console.log('mine for loop');
                var interval = setInterval( function (){
            barrelRender(mineImg, mineX, mineY, boatDrawX, boatDrawY, i, sheetY, width, height, level);
                count++;
                sheetY = (count * 115);
                    console.log(sheetY);
                    if (count >= 20) {
                        clearInterval(interval);
                    }
               
        }, 200)
            };
        
        
        };
    


    function barrelRender(mineImg, mineX, mineY, boatDrawX, boatDrawY, i, sheetY, width, height, level) {
        levelBackground(level);     
        window.ctx.drawImage(mineImg, 0, sheetY, width, height, 0,0, width, height);
            
        
        console.log("barrel rendered");
        };
    //(((mineX[i] - 1) * 64) + boatDrawX), (((mineY[i] - 1) * 64) + boatDrawY)
    
    //draws the level background
    function levelBackground(level) {
        window.ctx.drawImage(document.getElementById("" + level.name), 0, 0, window.canvas.width, window.canvas.height);
    };

    //boat moving sound
    function boatSound() {
        return new Audio("sound/oarswater-000.ogg", true);
    }
    
    function loseSound() {
        return new Audio("sound/wilhelm.mp3", true);     
    }

    //background music depending on where you are in the game
    function backgroundMusic(location) {
        if(location.name == "LevelOne") {
            return new Audio("sound/background.mp3", true);
        }
    }
    
        function winner(movement) {
                    var y = document.getElementById("seconds").innerHTML;
                    var score = 100 - (10 * y) + (treasureGrab * 50);
                    if (score < 0) {
                        score = 0;   
                    }
            
                    alert('Your score was: ' + score);
                    sec = 0;
                    
            startLevel(nextLevel);
            
            window.removeEventListener('keydown', movement, false);
            return null;
        }

        function loser(movement, loss, currentLevel) {
            alert("You lose, level restarting.");
            loss.play();
            
            startLevel(currentLevel);
            window.removeEventListener('keydown', movement, false);
        }

        function scoreIncrease() {
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
        