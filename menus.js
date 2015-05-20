       
        function StartMenu() {
            var WIDTH = 720;
            var HEIGHT = 480;
            
            //window.currentWidth = window.WIDTH;
            //window.currentHeight = window.HEIGHT;
            //window.canvas = document.getElementById('canvas');
            //window.canvas.width = window.WIDTH;
            //window.canvas.height = window.HEIGHT;
            //window.ctx = window.canvas.getContext('2d');
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var img = new Image()
            img.src = "images/mainmenu.png"
            context.drawImage(img, 0, 0, 720, 480);
            
            
            //pulls the width of the canvas into var x
            var x = ctx.canvas.style.width;
            var width = parseInt(x);
            //removes the "px" from x, returns just a number, puts it into buttonWidthNum
            var buttonWidthNum = parseInt(x);
            //reduces buttonWidthNum to be half of what it was, change this to whatever, but use multiplication 
            buttonWidthNum = (buttonWidthNum * .375);
            

            //height for all
            var a = ctx.canvas.style.height;
            var height = parseInt(a);
            var buttonHeightNum = parseInt(a);
            
            buttonHeightNum = (buttonHeightNum * .096);
            height = (height * .2);

            //left for 'play'
            var b = getXPosition(canvas);
            
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            

            //top for 'play
            var buttonTopNum = (a * .7);
            
            //width * number + canvas x start position
            var leftDist = (width * .6) + b;
            //
            var buttonLeft3Num;
            var buttonLeft4Num;

        var play = document.createElement('input');
        play.type = "button";
            //have to append "px" to it, otherwise it doesn't work
        play.style.width = buttonWidthNum + "px";
            
        play.style.height = buttonHeightNum + "px";
            console.log(leftDist);
        play.style.left = leftDist + "px";
            
        play.style.top = height + "px";
            
        play.style.background = "none";
        //play.style.border = "none";
        play.style.position = "absolute";
        play.id = "play";
        document.body.appendChild(play);

        play.onclick = function () {
            startLevel(level1);
            play.parentNode.removeChild(play)
            highscores.parentNode.removeChild(highscores)
            levelselect.parentNode.removeChild(levelselect)
            instructions.parentNode.removeChild(instructions)
        };

        var levelselect = document.createElement('input');
        levelselect.type = "button";
        levelselect.style.width = buttonWidthNum + "px";
            
        levelselect.style.height = buttonHeightNum + "px";
            
        levelselect.style.left = 200+ "px";
            
        levelselect.style.top = 70+ "px";
            
        levelselect.style.background = "none";
        //levelselect.style.border = "none";
        levelselect.style.position = "absolute";
        levelselect.id = "levelselect";
        document.body.appendChild(levelselect);

        levelselect.onclick = function () {
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var img1 = new Image()
            img1.src = "images/levelselect.jpg"
            context.drawImage(img1, 0, 0, 720, 480);
            play.parentNode.removeChild(play)
            highscores.parentNode.removeChild(highscores)
            levelselect.parentNode.removeChild(levelselect)
            instructions.parentNode.removeChild(instructions)

            var back = document.createElement('input');
            back.type = "button";
            back.style.width = '85px';
            back.style.height = '55px';
            back.style.left = '820px';
            back.style.top = '360px';
            back.style.background = "none";
            back.style.border = "none";
            back.style.position = "absolute";
            back.id = "back";
            document.body.appendChild(back);

            back.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                window.location.href="./index.html"
            };
        };

        var highscores = document.createElement('input');
        highscores.type = "button";
        highscores.style.width = buttonWidthNum + "px";
            
        highscores.style.height = buttonHeightNum + "px";
            
        highscores.style.left = buttonLeft3Num + "px";
            
        highscores.style.top = '234px';
        highscores.style.background = "none";
        //highscores.style.border = "none";
        highscores.style.position = "absolute";
        highscores.id = "highscores";
        document.body.appendChild(highscores);

        highscores.onclick = function () {
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var img2 = new Image()
            img2.src = "images/scores1280.jpg"
            context.drawImage(img2, 0, 0, 720, 480);
            play.parentNode.removeChild(play)
            highscores.parentNode.removeChild(highscores)
            levelselect.parentNode.removeChild(levelselect)
            instructions.parentNode.removeChild(instructions)

            var back = document.createElement('input');
            back.type = "button";
            back.style.width = '142px';
            back.style.height = '70px';
            back.style.left = '887px';
            back.style.top = '404px';
            back.style.background = "none";
            back.style.border = "none";
            back.style.position = "absolute";
            back.id = "back";
            document.body.appendChild(back);

            back.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                window.location.href="./index.html"
            };
        };

        var instructions = document.createElement('input');
        instructions.type = "button";
        instructions.style.width = buttonWidthNum + "px";
            
        instructions.style.height = buttonHeightNum + "px";
            
        instructions.style.left4 = buttonLeft4Num + "px";
            
        instructions.style.top = '310px';
        instructions.style.background = "none";
        //instructions.style.border = "none";
        instructions.style.position = "absolute";
        instructions.id = "instructions";
        document.body.appendChild(instructions);

        instructions.onclick = function () {
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var img1 = new Image()
            img1.src = "images/instructions.jpg"
            context.drawImage(img1, 0, 0, 720, 480);
            play.parentNode.removeChild(play)
            highscores.parentNode.removeChild(highscores)
            levelselect.parentNode.removeChild(levelselect)
            instructions.parentNode.removeChild(instructions)

            var back = document.createElement('input');
            back.type = "button";
            back.style.width = '140px';
            back.style.height = '65px';
            back.style.left = '840px';
            back.style.top = '404px';
            back.style.background = "none";
            back.style.border = "none";
            back.style.position = "absolute";
            back.id = "back";
            document.body.appendChild(back);

            back.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                window.location.href="./index.html"
            };
        }

        }
        
        function getYPosition(element) {
	       var yPosition = 0;
 
	       while(element) {
                yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
                element = element.offsetParent;
           }
            
            return yPosition;
        }

        function getXPosition(element) {
	       var xPosition = 0;
	
	       while(element) {
               xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
               element = element.offsetParent;
	   }
            
	return xPosition;
}

