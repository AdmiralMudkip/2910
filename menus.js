       
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
            var buttonWidth1Num = parseInt(x);
            var buttonWidth2Num = parseInt(x);
            var buttonWidth3Num = parseInt(x);
            //reduces buttonWidthNum to be half of what it was, change this to whatever, but use multiplication 
            buttonWidthNum = (buttonWidthNum * .375);
            buttonWidth1Num = (buttonWidth1Num * .12);
            buttonWidth2Num = (buttonWidth2Num * .201);
            buttonWidth3Num = (buttonWidth3Num * .19);
          
///////////////////////PLAY///////////////////////////

            //height for 'play'
            var a = ctx.canvas.style.height;
            var height = parseInt(a);
            var buttonHeightNum = parseInt(a);
            buttonHeightNum = (buttonHeightNum * .096);
            height = (height * .215);

            //left for 'play'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'play
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist = (width * .59) + b;

////////////////LEVELSELECT////////////////////

            //height for 'levelselect'
            var a = ctx.canvas.style.height;
            var height1 = parseInt(a);
            var buttonHeightNum = parseInt(a);
            buttonHeightNum = (buttonHeightNum * .096);
            height1 = (height1 * .36);

            //left for 'levelselect'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'levelselect
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist1 = (width * .589) + b;

////////////////HIGHSCORES////////////////////

            //height for 'highscores'
            var a = ctx.canvas.style.height;
            var height2 = parseInt(a);
            var buttonHeightNum = parseInt(a);
            buttonHeightNum = (buttonHeightNum * .096);
            height2 = (height2 * .495);

            //left for 'highscores'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'highscores
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist2 = (width * .59) + b;

////////////////INSTRUCTIONS////////////////////

            //height for 'instructions'
            var a = ctx.canvas.style.height;
            var height3 = parseInt(a);
            var buttonHeightNum = parseInt(a);
            buttonHeightNum = (buttonHeightNum * .096);
            height3 = (height3 * .653);

            //left for 'instructions'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'instructions
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist3 = (width * .59) + b;

////////////////BACK BUTTON FOR LEVELSELECT////////////////////

            //height for 'back'
            var a = ctx.canvas.style.height;
            var height4 = parseInt(a);
            var buttonHeight1Num = parseInt(a);
            buttonHeight1Num = (buttonHeight1Num * .12);
            height4 = (height4 * .75);

            //left for 'back'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'back'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist4 = (width * .69) + b;

////////////////BACK BUTTON FOR HIGHSCORES////////////////////

            //height for 'back'
            var a = ctx.canvas.style.height;
            var height5 = parseInt(a);
            var buttonHeight2Num = parseInt(a);
            buttonHeight2Num = (buttonHeight2Num * .15);
            height5 = (height5 * .84);

            //left for 'back'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'back'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist5 = (width * .78) + b;

////////////////BACK BUTTON FOR INSTRUCTIONS////////////////////

            //height for 'back'
            var a = ctx.canvas.style.height;
            var height6 = parseInt(a);
            var buttonHeight3Num = parseInt(a);
            buttonHeight3Num = (buttonHeight3Num * .14);
            height6 = (height6 * .84);

            //left for 'back'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'back'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist6 = (width * .72) + b;

        var play = document.createElement('input');
        play.type = "button";
            //have to append "px" to it, otherwise it doesn't work

        play.style.width = buttonWidthNum + "px";   
        play.style.height = buttonHeightNum + "px";          
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
        levelselect.style.left = leftDist1 + "px";          
        levelselect.style.top = height1 + "px";         
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
            back.style.width = buttonWidth1Num + "px";
            back.style.height = buttonHeight1Num + "px";
            back.style.left = leftDist4 + "px";
            back.style.top = height4 + "px";
            back.style.background = "none";
            //back.style.border = "none";
            back.style.position = "absolute";
            back.id = "back";
            document.body.appendChild(back);

            back.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                window.location.href = "./index.html"
            };
        };

        var highscores = document.createElement('input');
        highscores.type = "button";
        highscores.style.width = buttonWidthNum + "px";           
        highscores.style.height = buttonHeightNum + "px";           
        highscores.style.left = leftDist2 + "px";          
        highscores.style.top = height2 + "px";
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
            back.style.width = buttonWidth2Num + "px";
            back.style.height = buttonHeight2Num + "px";
            back.style.left = leftDist5 + "px";
            back.style.top = height5 + "px";
            back.style.background = "none";
            //back.style.border = "none";
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
        instructions.style.left = leftDist3 + "px";         
        instructions.style.top = height3 + "px";
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
            back.style.width = buttonWidth3Num + "px";
            back.style.height = buttonHeight3Num + "px";
            back.style.left = leftDist6 + "px";
            back.style.top = height6 + "px";
            back.style.background = "none";
            //back.style.border = "none";
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

