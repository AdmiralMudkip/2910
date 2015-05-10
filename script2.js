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
    //level 1 array
    var level1 = [  
                    [bar,   bar,      bar,        bar],
                    [bar,   boat,     treasure,   bar],
                    [bar,   mine,     goal,       bar],
                    [bar,   bar,      bar,        bar]
                ];

    var level2 = [
                    [bar,   bar,    bar,    bar,    bar,    bar],
                    [bar,   boat,   empty,  mine,   goal,   bar],
                    [bar,   mine,   empty,  empty,  empty,  bar],
                    [bar,   bar,    bar,    bar,    bar,    bar]
                ];


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

        
        window.ctx.drawImage(document.getElementById("LevelOne20"), 0, 0, window.canvas.width, window.canvas.height);
        
        var currentLevel = level1;
        levelBackground(currentLevel);
        var i;
        var boatCurrentDir = right;
        var win = 0;
        var lose = 0;
        var treasureGrabbed = 0;
        var boatLocX = 1;
        var boatLocY = 1;
        
        var tileWidth = 64;
        var boatStartLevel1X = 265;
        var boatStartLevel1Y = 145;
        
        
        //var boatMove = new Audio("sound/wombo-combo.mp3");  wombo combo version, used as a tester
        var boatMove = new Audio("sound/oarswater-000.ogg", true);
        var backgroundMusic = new Audio("sound/background.mp3", true);
        
        backgroundMusic.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        
        backgroundMusic.play();
        window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * tileWidth) + boatStartLevel1X), (((boatLocY - 1) * tileWidth) + boatStartLevel1Y));
        
        window.addEventListener('keydown', function (e) {
            
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
        }, false);
        
        //these functions return the value in the respective position in the array relative to the boat
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

        
        function winner() {
            alert("You win!");
        }

        function loser() {
            alert("You lose!");
        }
        
        //move functions.  Checks to see what's in the adjacent tile, and then does something based on whatever was found
        function moveLeft() {
            if(checkLeft() != bar) {
                //boat moving left anim func
                boatCurrentDir = left;
                if(checkLeft() == treasure) {
                    //boat gets treasure anim func
                    //treasureGrabbed += 1;
                    alert("You grabbed some treasure!");
                }

                else if(checkLeft() == mine) {
                    //boat explodes func
                    //lose = 1;
                    alert("You hit a mine!");
                }

                else if(checkLeft() == goal) {
                    //winning anim function
                    //win = 1;
                    alert("You reached the goal!");
                }
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocY -= 1;
                currentLevel[boatLocX][boatLocY] = boat;
                window.ctx.drawImage(document.getElementById("LevelOne20"), 0, 0, window.canvas.width, window.canvas.height);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * tileWidth) + boatStartLevel1X), (((boatLocX - 1) * tileWidth) + boatStartLevel1Y));
                boatMove.play();
            } 
        }

        function moveRight() {
            if(checkRight() != bar) {
                //boat moving right anim func
                boatCurrentDir = right;
                if(checkRight() == treasure) {
                    //boat gets treasure anim func
                    treasureGrabbed += 1;
                    alert("You grabbed some treasure!");
                }

                if(checkRight() == mine) {
                    //boat explodes func
                    lose = 1;
                    alert("You hit a mine!");
                }

                if(checkRight() == goal) {
                    //winning anim function
                    
                    alert("You reached the goal!");
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocY += 1;
                currentLevel[boatLocX][boatLocY] = boat;
                window.ctx.drawImage(document.getElementById("LevelOne20"), 0, 0, window.canvas.width, window.canvas.height);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * tileWidth) + boatStartLevel1X), (((boatLocX - 1) * tileWidth) + boatStartLevel1Y));
                boatMove.play();
            } 
        }

        function moveUp() {
            if(checkUp() != bar) {
                //boat moving up anim func
                boatCurrentDir = up;
                if(checkUp() == treasure) {
                    //boat gets treasure anim func
                    treasureGrabbed += 1;
                    alert("You grabbed some treasure!");
                }

                if(checkUp() == mine) {
                    //boat explodes func
                    lose = 1;
                    alert("You hit a mine!");
                }

                if(checkUp() == goal) {
                    //winning anim function
                    win = 1;
                    alert("You reached the goal!");
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocX -= 1;
                currentLevel[boatLocX][boatLocY] = boat;
                window.ctx.drawImage(document.getElementById("LevelOne20"), 0, 0, window.canvas.width, window.canvas.height);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * tileWidth) + boatStartLevel1X), (((boatLocX - 1) * tileWidth) + boatStartLevel1Y));
                boatMove.play();
            } 
        }

        function moveDown() {
            if(checkDown() != bar) {
                //boat moving left anim func
                boatCurrentDir = down;
                if(checkDown() == treasure) {
                    //boat gets treasure anim func
                    treasureGrabbed += 1;
                    alert("You grabbed some treasure!");
                }

                if(checkDown() == mine) {
                    //boat explodes func
                    lose = 1;
                    alert("You hit a mine!");
                }

                if(checkDown() == goal) {
                    //winning anim function
                    win = 1;
                    alert("You reached the goal!");
                }
                
                
                currentLevel[boatLocX][boatLocY] = empty;
                boatLocX += 1;
                currentLevel[boatLocX][boatLocY] = boat;
                window.ctx.drawImage(document.getElementById("LevelOne20"), 0, 0, window.canvas.width, window.canvas.height);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * tileWidth) + boatStartLevel1X), (((boatLocX - 1) * tileWidth) + boatStartLevel1Y));
                boatMove.play();
            } 
        }
        
        
        //drawing invisible images
        //window.Draw.circle(100, 100, 50, 'rgba(255,255,0,0)');

        //window.Draw.rect(0,0,window.canvas.width,window.canvas.height*7/8, 'Blue');


        // window.Draw.rect(0,window.canvas.height*7/8,window.canvas.width,window.canvas.height/8, 'Brown');
        // window.Draw.circle(window.canvas.height*1/16, window.canvas.height*15/16, window.canvas.height*1/32, 'rgba(255,255,0,0.5)');

        // window.Draw.circle(window.canvas.width - window.canvas.height*1/16, window.canvas.height*15/16, window.canvas.height*1/32, 'rgba(255,255,0,0.5)');
        // window.Draw.text('Frantic Frigate', window.canvas.height*5/32, window.canvas.height*61/64, 20, '#066');

        //how to use an image
        // var levelOne = document.getElementById("levelOne");
        // window.ctx.drawImage(levelOne, 0, 0,window.canvas.width,window.canvas.height*7/8);
        // window.ctx.drawImage(levelOne, 0, window.canvas.height*7/8,window.canvas.width,window.canvas.height*1/8);
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
        currentLevel = level;
        levelBackground(currentLevel);
        var i;
        var boatCurrentDir = right;
        var win = 0;
        var lose = 0;
        var treasureGrabbed = 0;
        var boatLocX = 1;
        var boatLocY = 1;
        
        window.ctx.drawImage(document.getElementById("boat"), boatLocX, boatLocY);
        
        window.addEventListener('keydown', function (e) {
            
                if (e.keyCode == '38' ) {
                    //up arrow
                    moveUp();
                    alert("asdf");
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
        }, false);
        
        function checkLeft() {
            return currentLevel[boatLocX - 1][boatLocY];
        }
        function checkRight() {
            return currentLevel[boatLocX + 1][boatLocY];
        }
        function checkUp() {
            return currentLevel[boatLocX][boatLocY - 1];
        }
        
        function checkDown() {
            return currentLevel[boatLocX][boatLocY + 1];
        }

        function winner() {
            alert("You win!");
        }

        function loser() {
            alert("You lose!");
        }
        
        function moveLeft() {
            if(checkLeft() != bar) {
                //boat moving left anim func
                boatCurrentDir = left;
                if(checkLeft() == treasure) {
                    //boat gets treasure anim func
                    treasureGrabbed += 1;
                }

                if(checkLeft() == mine) {
                    //boat explodes func
                    lose = 1;
                }

                if(checkLeft() == goal) {
                    //winning anim function
                    win = 1;
                }
                
                currentLevel[boatLocationX][boatLocationY] = empty;
                boatLocationX -= 1;
                currentLevel[boatLocationX][boatLocationY] = boat;
            } 
        }

        function moveRight() {
            if(checkRight() != bar) {
                //boat moving right anim func
                boatCurrentDir = right;
                if(checkRight() == treasure) {
                    //boat gets treasure anim func
                    treasureGrabbed += 1;
                }

                if(checkRight() == mine) {
                    //boat explodes func
                    lose = 1;
                }

                if(checkRight() == goal) {
                    //winning anim function
                    win = 1;
                }
                
                currentLevel[boatLocationX][boatLocationY] = empty;
                boatLocationX += 1;
                currentLevel[boatLocationX][boatLocationY] = boat;
            } 
        }

        function moveUp() {
            if(checkUp() != bar) {
                //boat moving up anim func
                boatCurrentDir = up;
                if(checkUp() == treasure) {
                    //boat gets treasure anim func
                    treasureGrabbed += 1;
                }

                if(checkUp() == mine) {
                    //boat explodes func
                    lose = 1;
                }

                if(checkUp() == goal) {
                    //winning anim function
                    win = 1;
                }
                
                currentLevel[boatLocationX][boatLocationY] = empty;
                boatLocationY -= 1;
                currentLevel[boatLocationX][boatLocationY] = boat;
            } 
        }

        function moveDown() {
            if(checkDown() != bar) {
                //boat moving left anim func
                boatCurrentDir = down;
                if(checkDown() == treasure) {
                    //boat gets treasure anim func
                    treasureGrabbed += 1;
                }

                if(checkDown() == mine) {
                    //boat explodes func
                    lose = 1;
                }

                if(checkDown() == goal) {
                    //winning anim function
                    win = 1;
                }
                
                currentLevel[boatLocationX][boatLocationY] = empty;
                boatLocationY += 1;
                currentLevel[boatLocationX][boatLocationY] = boat;
            } 
        }
        
        
        
        for(i = 0; i < currentLevel.length.length; i++) {
            if(currentLevel[1][i] === boat) {
                boatLocX = 1;
                boatLocY = i;
            }
        }

        while(win == 0 && lose == 0) {
            //play the game
        }

        if(win == 1) {
            winner();
        }
        if(lose == 1) {
            loser();
        }
        init();
    };
    
    //this starts the level setup animation and 
    function levelBackground(level) {
        
    };

// abstracts various canvas operations into
// standalone functions
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