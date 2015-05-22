       
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
            var buttonWidth4Num = parseInt(x);
            var buttonWidth5Num = parseInt(x);
            var buttonWidth6Num = parseInt(x);
            var buttonWidth7Num = parseInt(x);
            var buttonWidth8Num = parseInt(x);
            var buttonWidth9Num = parseInt(x);

            //reduces buttonWidthNum to be half of what it was, change this to whatever, but use multiplication 
            buttonWidthNum = (buttonWidthNum * .375);
            buttonWidth1Num = (buttonWidth1Num * .12);
            buttonWidth2Num = (buttonWidth2Num * .201);
            buttonWidth3Num = (buttonWidth3Num * .19);
            buttonWidth4Num = (buttonWidth4Num * .096);
            buttonWidth5Num = (buttonWidth5Num * .42);
            buttonWidth6Num = (buttonWidth6Num * .42);
            buttonWidth7Num = (buttonWidth7Num * .42);
            buttonWidth8Num = (buttonWidth8Num * .096);
            buttonWidth9Num = (buttonWidth9Num * .096);
          
///////////////////////PLAY//////////////////////////

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

////////////////PAUSE BUTTON FOR PLAY////////////////////

            //height for 'pause'
            var a = ctx.canvas.style.height;
            var height7 = parseInt(a);
            var buttonHeight4Num = parseInt(a);
            buttonHeight4Num = (buttonHeight4Num * .085);
            height7 = (height7 * 0.91);

            //left for 'pause'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'pause'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist7 = (width * .315) + b;

////////////////PAUSE BUTTON FOR 'BACK TO GAME'////////////////////

            //height for 'pause'
            var a = ctx.canvas.style.height;
            var height8 = parseInt(a);
            var buttonHeight5Num = parseInt(a);
            buttonHeight5Num = (buttonHeight5Num * .18);
            height8 = (height8 * 0.25);

            //left for 'pause'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'pause'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist8 = (width * .27) + b;

////////////////PAUSE BUTTON FOR 'INSTRUCTIONS'////////////////////

            //height for 'pause'
            var a = ctx.canvas.style.height;
            var height9 = parseInt(a);
            var buttonHeight6Num = parseInt(a);
            buttonHeight6Num = (buttonHeight6Num * .18);
            height9 = (height9 * 0.46);

            //left for 'pause'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'pause'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist9 = (width * .27) + b;

////////////////PAUSE BUTTON FOR 'MAIN MENU'////////////////////

            //height for 'pause'
            var a = ctx.canvas.style.height;
            var height10 = parseInt(a);
            var buttonHeight7Num = parseInt(a);
            buttonHeight7Num = (buttonHeight7Num * .18);
            height10 = (height10 * 0.675);

            //left for 'pause'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'pause'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist10 = (width * .27) + b;

////////////////RESTART BUTTON FOR PLAY////////////////////

            //height for 'restart'
            var a = ctx.canvas.style.height;
            var height11 = parseInt(a);
            var buttonHeight8Num = parseInt(a);
            buttonHeight8Num = (buttonHeight8Num * .085);
            height11 = (height11 * 0.91);

            //left for 'restart'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'restart'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist11 = (width * .452) + b;

////////////////MUTE BUTTON FOR PLAY////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height12 = parseInt(a);
            var buttonHeight9Num = parseInt(a);
            buttonHeight9Num = (buttonHeight9Num * .085);
            height12 = (height12 * 0.91);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist12 = (width * .59) + b;

        var play = document.createElement('input');
        play.type = "button";
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

            var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            //pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                var img3 = new Image()
                img3.src = "images/pause.jpg"
                context.drawImage(img3, 0, 0, 720, 480);
                pause.parentNode.removeChild(pause)
                restart.parentNode.removeChild(restart)
                mute.parentNode.removeChild(mute)

                var pause1 = document.createElement('input');
                pause1.type = "button";
                pause1.style.width = buttonWidth5Num + "px";
                pause1.style.height = buttonHeight5Num + "px";
                pause1.style.left = leftDist8 + "px";
                pause1.style.top = height8 + "px";
                pause1.style.background = "none";
                //pause1.style.border = "none";
                pause1.style.position = "absolute";
                pause1.id = "pause1";
                document.body.appendChild(pause1);

                pause1.onclick = function () {
                    startLevel(level1);
                    pause1.parentNode.removeChild(pause1)
                    pause2.parentNode.removeChild(pause2)
                    pause3.parentNode.removeChild(pause3)
                    back1.parentNode.removeChild(back1)
                }

                var pause2 = document.createElement('input');
                pause2.type = "button";
                pause2.style.width = buttonWidth6Num + "px";
                pause2.style.height = buttonHeight6Num + "px";
                pause2.style.left = leftDist9 + "px";
                pause2.style.top = height9 + "px";
                pause2.style.background = "none";
                //pause2.style.border = "none";
                pause2.style.position = "absolute";
                pause2.id = "pause2";
                document.body.appendChild(pause2);

                pause2.onclick = function () {
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    var img1 = new Image()
                    img1.src = "images/instructions.jpg"
                    context.drawImage(img1, 0, 0, 720, 480);
                    pause1.parentNode.removeChild(pause1)
                    pause2.parentNode.removeChild(pause2)
                    pause3.parentNode.removeChild(pause3)

                    var back1 = document.createElement('input');
                    back1.type = "button";
                    back1.style.width = buttonWidth3Num + "px";
                    back1.style.height = buttonHeight3Num + "px";
                    back1.style.left = leftDist6 + "px";
                    back1.style.top = height6 + "px";
                    back1.style.background = "none";
                    //back1.style.border = "none";
                    back1.style.position = "absolute";
                    back1.id = "back1";
                    document.body.appendChild(back1);

                    back1.onclick = function () {
                        startLevel(level1);
                        back1.parentNode.removeChild(back1)
                        pause1.parentNode.removeChild(pause1)
                        pause2.parentNode.removeChild(pause2)
                        pause3.parentNode.removeChild(pause3)
                    }
                };

                var pause3 = document.createElement('input');
                pause3.type = "button";
                pause3.style.width = buttonWidth7Num + "px";
                pause3.style.height = buttonHeight7Num + "px";
                pause3.style.left = leftDist10 + "px";
                pause3.style.top = height10 + "px";
                pause3.style.background = "none";
                //pause3.style.border = "none";
                pause3.style.position = "absolute";
                pause3.id = "pause3";
                document.body.appendChild(pause3);

                pause3.onclick = function () {
                    var canvas = document.getElementById("canvas");
                    var context = canvas.getContext("2d");
                    window.location.href = "./FranticFrigate.html"
                    pause1.parentNode.removeChild(pause1)
                    pause2.parentNode.removeChild(pause2)
                    pause3.parentNode.removeChild(pause3)
                }
            }


            var restart = document.createElement('input');
            restart.type = "button";
            restart.style.width = buttonWidth8Num + "px";
            restart.style.height = buttonHeight8Num + "px";
            restart.style.left = leftDist11 + "px";
            restart.style.top = height11 + "px";
            restart.style.background = "none";
            //restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                //code goes here nick!!

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            //mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //code goes here nick!!

            }


        }

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
                window.location.href = "./FranticFrigate.html"
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
                window.location.href="./FranticFrigate.html"
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
                window.location.href="./FranticFrigate.html"
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