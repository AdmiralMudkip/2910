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
    
    var level1 = [[bar, bar, bar, bar],
              [bar, boat, treasure, bar],
              [bar, mine, goal, bar],
              [bar, bar, bar, bar]];


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
            window.Input.set(e);
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

        
        window.ctx.drawImage(document.getElementById("Main"), 0, 0, window.canvas.width, window.canvas.height);

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
        var i, boatLocX, boatLocY;
            for(i = 0; i < currentLevel.length; i++) {
                if(currentLevel[i][0] === boat) {
                    boatLocX = 0;
                    boatLocY = i;
                }
            }

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