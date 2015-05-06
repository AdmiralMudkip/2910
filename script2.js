//level arrays
//each segment is a row

var empty = 0;
var boat = 1;
var mine = 2;
var treasure = 3;
var goal = 4;
var currentLevel;
var level1 = [[9, 9, 9, 9],
              [9, boat, treasure, 9],
              [9, mine, goal, 9],
              [9, 9, 9, 9]];

currentLevel = level1;
// game logic functions

//recieves an input value, and searches the currentlevel array for that value.
//! - important : won't work with mines (because there's lots of them), use it for the boat, goal, and treasure.
//this function is supposed to iterate through the array, I dont think it currently does this ~Jason
function checkLocation(search) {
    var i, e;
    
    for (i = 0; i < currentLevel.length; i++) {
        for (e = 0; e < currentLevel.length.length; e++) {
            if (currentLevel[i][e] === search) {
                return currentLevel[i][e];
            }
            // !-- OLDER CODE.  Trying the above instead.  Just keeping this around. ~Jason
            //if (currentLevel[i].number.split(',').indexOf(search) >= 0 {
            //  return currentLevel[i][j];
           // should return the position of the value that was searched for
        }
    }


// functions to check up/down/left/right.  Returns the location of the tile if it is empty. ~Jason  
    function checkLeft() {
        var temp = checkLocation(boat);
        if (currentLevel[i - 1][e] === 0) {
            return currentLevel[i - 1][e];
        }
        
    }
        
    function checkRight() {
        var temp = checkLocation(boat);
        if (currentLevel[i + 1][e] === 0) {
            return currentlevel[i + 1][e];
        }
    }
        
        
    function checkAbove() {
        var temp = checkLocation(boat);
        if (currentLevel[i][e - 1] === 0) {
            return currentLevel[i][e - 1];
        }
    
    }
        
    function checkBelow() {
        var temp = checkLocation(boat);
        if (currentLevel[i][e + 1] === 0) {
            return currentLevel[i][e + 1];
        }
    }
            

    function win() {
    
    }

    function loss() {
    
    }

    function moveLeft() {
        var temp = checkLocation(boat);
    
        if (checkLeft() === mine) {
            loss();
        }
        
        if (checkLeft() === treasure) {
            scoreIncrease();
        }
        
        if (checkLeft() === goal) {
            win();
        }
    }

    function moveRight() {
        var temp = checkLocation(boat);
    
            
        if (checkRight() === mine) {
            loss();
        }
        
        if (checkRight() === treasure) {
            scoreIncrease;   
        }
        
        if (checkRight() === goal) {
            win();
        }
        
    }

    function moveUp() {
        var temp = checkLocation(boat);
        
        if (checkUp() === mine) {
            loss();
        }
        
        if (checkUp() === treasure) {
            scoreIncrease;   
        }
        
        if (checkUp() === goal) {
            win();
        }
    }

    function moveDown() {
        var temp = checkLocation(boat);
        
        if (checkDown() === empty) {
            
            
        }
        
        if (checkDown() === mine) {
            loss();
        }
        
        if (checkDown() === treasure) {
            scoreIncrease;   
        }
        
        if (checkDown() === goal) {
            win();
        }
    }

//should reset the currentlevel array with the respective stored array.  Will have to be called when the user beats a level.
        function newLevel() {
    
        }

// ui functions

function toMainMenu(){
    
}

function toLevelSelect(){
    
}

function toHighScores(){
    
}

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
// name of our game
var FF = {

	
    // set up some initial values
    WIDTH: 720, 
    HEIGHT:  480, 
    // we'll set the rest of these
    // in the init function
    RATIO:  null,
    currentWidth:  null,
    currentHeight:  null,
    canvas: null,
    ctx:  null,
	
    scale:  1,
	
    offset: {top: 0, left: 0},

    //variables to store in the array
    empty: 0,
    boat: 1,
    mine: 2,
    treasure: 3,
    goal: 4,

    init: function() {

        // the proportion of width to height
        FF.RATIO = FF.WIDTH / FF.HEIGHT;
        // these will change when the screen is resized
        FF.currentWidth = FF.WIDTH;
        FF.currentHeight = FF.HEIGHT;
        // this is our canvas element
        FF.canvas = document.getElementsByTagName('canvas')[0];
        // setting this is important
        // otherwise the browser will
        // default to 720 x 480
        FF.canvas.width = FF.WIDTH;
        FF.canvas.height = FF.HEIGHT;
        // the canvas context enables us to 
        // interact with the canvas api
        FF.ctx = FF.canvas.getContext('2d');

        // we're ready to resize
        FF.resize();
		FF.resize();
		
		// we need to sniff out Android and iOS
		// so that we can hide the address bar in
		// our resize function
		FF.ua = navigator.userAgent.toLowerCase();
		FF.android = FF.ua.indexOf('android') > -1 ? true : false;
		FF.ios = ( FF.ua.indexOf('iphone') > -1 || FF.ua.indexOf('ipad') > -1  ) ? 
		true : false;
		
		// listen for clicks
		window.addEventListener('click', function(e) {
			e.preventDefault();
			FF.Input.set(e);
		}, false);

		// listen for touches
		window.addEventListener('touchstart', function(e) {
			e.preventDefault();
			// the event object has an array
			// named touches; we just want
			// the first touch
			FF.Input.set(e.touches[0]);
		}, false);
		
		window.addEventListener('touchmove', function(e) {
			// we're not interested in this,
			// but prevent default behaviour
			// so the screen doesn't scroll
			// or zoom
			e.preventDefault();
		}, false);
		
		window.addEventListener('touchend', function(e) {
			// as above
			e.preventDefault();
		}, false);
		
        //menu starts on startup
		FF.ctx.drawImage(document.getElementById("Main"), 0, 0,FF.canvas.width,FF.canvas.height);
		
		
		//drawing invisible images
		//FF.Draw.circle(100, 100, 50, 'rgba(255,255,0,0)');
		
		//FF.Draw.rect(0,0,FF.canvas.width,FF.canvas.height*7/8, 'Blue');
		
		
		// FF.Draw.rect(0,FF.canvas.height*7/8,FF.canvas.width,FF.canvas.height/8, 'Brown');
		// FF.Draw.circle(FF.canvas.height*1/16, FF.canvas.height*15/16, FF.canvas.height*1/32, 'rgba(255,255,0,0.5)');
		
		// FF.Draw.circle(FF.canvas.width - FF.canvas.height*1/16, FF.canvas.height*15/16, FF.canvas.height*1/32, 'rgba(255,255,0,0.5)');
		// FF.Draw.text('Frantic Frigate', FF.canvas.height*5/32, FF.canvas.height*61/64, 20, '#066');

		//how to use an image
		// var levelOne = document.getElementById("levelOne");
		// FF.ctx.drawImage(levelOne, 0, 0,FF.canvas.width,FF.canvas.height*7/8);
		// FF.ctx.drawImage(levelOne, 0, FF.canvas.height*7/8,FF.canvas.width,FF.canvas.height*1/8);
    },

    resize: function() {

        FF.currentWidth = window.innerWidth;
        // resize the width in proportion
        // to the new height
        FF.currentHeight = FF.currentWidth / FF.RATIO;

        // this will create some extra space on the
        // page, allowing us to scroll past
        // the address bar, thus hiding it.
        if (FF.android || FF.ios) {
            document.body.style.height = (window.innerHeight + 50) + 'px';
        }

        // set the new canvas style width and height
        // note: our canvas is still 320 x 480, but
        // we're essentially scaling it with CSS
        FF.canvas.style.width = FF.currentWidth + 'px';
        FF.canvas.style.height = FF.currentHeight + 'px';

        // we use a timeout here because some mobile
        // browsers don't fire if there is not
        // a short delay
        window.setTimeout(function() {
                window.scrollTo(0,1);
        }, 1);
    }

};

// abstracts various canvas operations into
// standalone functions
FF.Draw = {

    clear: function() {
        FF.ctx.clearRect(0, 0, FF.WIDTH, FF.HEIGHT);
    },

    rect: function(x, y, w, h, col) {
        FF.ctx.fillStyle = col;
        FF.ctx.fillRect(x, y, w, h);
    },

    circle: function(x, y, r, col) {
        FF.ctx.fillStyle = col;
        FF.ctx.beginPath();
        FF.ctx.arc(x, y, r, 0,  Math.PI * 2, true);
        FF.ctx.closePath();
        FF.ctx.fill();
    },

    text: function(string, x, y, size, col) {
        FF.ctx.font = 'bold '+size+'px Monospace';
        FF.ctx.fillStyle = col;
        FF.ctx.fillText(string, x, y);
    }
	

};

window.addEventListener('load', FF.init, false);
window.addEventListener('resize', FF.resize, false);