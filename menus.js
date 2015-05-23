       
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
            var buttonWidth10Num = parseInt(x);
            var buttonWidth11Num = parseInt(x);
            var buttonWidth12Num = parseInt(x);
            var buttonWidth13Num = parseInt(x);
            var buttonWidth14Num = parseInt(x);
            var buttonWidth15Num = parseInt(x);
            var buttonWidth16Num = parseInt(x);
            var buttonWidth17Num = parseInt(x);
            var buttonWidth18Num = parseInt(x);
            var buttonWidth19Num = parseInt(x);

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
            buttonWidth10Num = (buttonWidth10Num * .096);
            buttonWidth11Num = (buttonWidth11Num * .08);
            buttonWidth12Num = (buttonWidth12Num * .11);
            buttonWidth13Num = (buttonWidth13Num * .112);
            buttonWidth14Num = (buttonWidth14Num * .1);
            buttonWidth15Num = (buttonWidth15Num * .08);
            buttonWidth16Num = (buttonWidth16Num * .096);
            buttonWidth17Num = (buttonWidth17Num * .096);
            buttonWidth18Num = (buttonWidth18Num * .096);
            buttonWidth19Num = (buttonWidth19Num * .105);
          
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////LEVEL 1 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height13 = parseInt(a);
            var buttonHeight10Num = parseInt(a);
            buttonHeight10Num = (buttonHeight10Num * .15);
            height13 = (height13 * 0.248);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist13 = (width * .555) + b;

////////////////LEVEL 2 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height14 = parseInt(a);
            var buttonHeight11Num = parseInt(a);
            buttonHeight11Num = (buttonHeight11Num * .13);
            height14 = (height14 * 0.2485);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist14 = (width * .705) + b;

////////////////LEVEL 3 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height15 = parseInt(a);
            var buttonHeight12Num = parseInt(a);
            buttonHeight12Num = (buttonHeight12Num * .15);
            height15 = (height15 * 0.24);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist15 = (width * .835) + b;

////////////////LEVEL 4 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height16 = parseInt(a);
            var buttonHeight13Num = parseInt(a);
            buttonHeight13Num = (buttonHeight13Num * .145);
            height16 = (height16 * 0.41);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist16 = (width * .535) + b;

////////////////LEVEL 5 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height17 = parseInt(a);
            var buttonHeight14Num = parseInt(a);
            buttonHeight14Num = (buttonHeight14Num * .145);
            height17 = (height17 * 0.4);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist17 = (width * .665) + b;

////////////////LEVEL 6 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height18 = parseInt(a);
            var buttonHeight15Num = parseInt(a);
            buttonHeight15Num = (buttonHeight15Num * .13);
            height18 = (height18 * 0.4);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist18 = (width * .794) + b;

////////////////LEVEL 7 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height19 = parseInt(a);
            var buttonHeight16Num = parseInt(a);
            buttonHeight16Num = (buttonHeight16Num * .15);
            height19 = (height19 * 0.397);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist19 = (width * .898) + b;

////////////////LEVEL 8 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height20 = parseInt(a);
            var buttonHeight17Num = parseInt(a);
            buttonHeight17Num = (buttonHeight17Num * .15);
            height20 = (height20 * 0.57);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist20 = (width * .567) + b;

////////////////LEVEL 9 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height21 = parseInt(a);
            var buttonHeight18Num = parseInt(a);
            buttonHeight18Num = (buttonHeight18Num * .14);
            height21 = (height21 * 0.56);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist21 = (width * .7) + b;

////////////////LEVEL 10 FOR LEVELSELECT////////////////////

            //height for 'mute'
            var a = ctx.canvas.style.height;
            var height22 = parseInt(a);
            var buttonHeight19Num = parseInt(a);
            buttonHeight19Num = (buttonHeight19Num * .14);
            height22 = (height22 * 0.56);

            //left for 'mute'
            var b = getXPosition(canvas);
            var buttonLeftNum = parseInt(b);
            buttonLeftNum = (buttonLeftNum * .7);
            
            //top for 'mute'
            var buttonTopNum = (b * .7);
            var buttonTopNum = (b * 1);
            buttonTopNum = (buttonTopNum+ 50);
     
            //width * number + canvas x start position
            var leftDist22 = (width * .857) + b;

        var play = document.createElement('input');
        play.type = "button";
        play.style.width = buttonWidthNum + "px";   
        play.style.height = buttonHeightNum + "px";          
        play.style.left = leftDist + "px";          
        play.style.top = height + "px";
        play.style.background = "none";
        play.style.border = "none";
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
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(currentLevel);
            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }

        }

        var levelselect = document.createElement('input');
        levelselect.type = "button";
        levelselect.style.width = buttonWidthNum + "px";            
        levelselect.style.height = buttonHeightNum + "px";            
        levelselect.style.left = leftDist1 + "px";          
        levelselect.style.top = height1 + "px";         
        levelselect.style.background = "none";
        levelselect.style.border = "none";
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

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            var levelone = document.createElement('input');
            levelone.type = "button";
            levelone.style.width = buttonWidth10Num + "px";
            levelone.style.height = buttonHeight10Num + "px";
            levelone.style.left = leftDist13 + "px";
            levelone.style.top = height13 + "px";
            levelone.style.background = "none";
            levelone.style.border = "none";
            levelone.style.position = "absolute";
            levelone.id = "levelone";
            document.body.appendChild(levelone);

            levelone.onclick = function () {
                startLevel(level1)
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

            var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }

            };

            var leveltwo = document.createElement('input');
            leveltwo.type = "button";
            leveltwo.style.width = buttonWidth11Num + "px";
            leveltwo.style.height = buttonHeight11Num + "px";
            leveltwo.style.left = leftDist14 + "px";
            leveltwo.style.top = height14 + "px";
            leveltwo.style.background = "none";
            leveltwo.style.border = "none";
            leveltwo.style.position = "absolute";
            leveltwo.id = "leveltwo";
            document.body.appendChild(leveltwo);

            leveltwo.onclick = function () {
                startLevel(level2);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var levelthree = document.createElement('input');
            levelthree.type = "button";
            levelthree.style.width = buttonWidth12Num + "px";
            levelthree.style.height = buttonHeight12Num + "px";
            levelthree.style.left = leftDist15 + "px";
            levelthree.style.top = height15 + "px";
            levelthree.style.background = "none";
            levelthree.style.border = "none";
            levelthree.style.position = "absolute";
            levelthree.id = "levelthree";
            document.body.appendChild(levelthree);

            levelthree.onclick = function () {
                startLevel(level3);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var levelfour = document.createElement('input');
            levelfour.type = "button";
            levelfour.style.width = buttonWidth13Num + "px";
            levelfour.style.height = buttonHeight13Num + "px";
            levelfour.style.left = leftDist16 + "px";
            levelfour.style.top = height16 + "px";
            levelfour.style.background = "none";
            levelfour.style.border = "none";
            levelfour.style.position = "absolute";
            levelfour.id = "levelfour";
            document.body.appendChild(levelfour);

            levelfour.onclick = function () {
                startLevel(level4);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var levelfive = document.createElement('input');
            levelfive.type = "button";
            levelfive.style.width = buttonWidth14Num + "px";
            levelfive.style.height = buttonHeight14Num + "px";
            levelfive.style.left = leftDist17 + "px";
            levelfive.style.top = height17 + "px";
            levelfive.style.background = "none";
            levelfive.style.border = "none";
            levelfive.style.position = "absolute";
            levelfive.id = "levelfive";
            document.body.appendChild(levelfive);

            levelfive.onclick = function () {
                startLevel(level5);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var levelsix = document.createElement('input');
            levelsix.type = "button";
            levelsix.style.width = buttonWidth15Num + "px";
            levelsix.style.height = buttonHeight15Num + "px";
            levelsix.style.left = leftDist18 + "px";
            levelsix.style.top = height18 + "px";
            levelsix.style.background = "none";
            levelsix.style.border = "none";
            levelsix.style.position = "absolute";
            levelsix.id = "levelsix";
            document.body.appendChild(levelsix);

            levelsix.onclick = function () {
                startLevel(level6);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var levelseven = document.createElement('input');
            levelseven.type = "button";
            levelseven.style.width = buttonWidth16Num + "px";
            levelseven.style.height = buttonHeight16Num + "px";
            levelseven.style.left = leftDist19 + "px";
            levelseven.style.top = height19 + "px";
            levelseven.style.background = "none";
            levelseven.style.border = "none";
            levelseven.style.position = "absolute";
            levelseven.id = "levelseven";
            document.body.appendChild(levelseven);

            levelseven.onclick = function () {
                startLevel(level7);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var leveleight = document.createElement('input');
            leveleight.type = "button";
            leveleight.style.width = buttonWidth17Num + "px";
            leveleight.style.height = buttonHeight17Num + "px";
            leveleight.style.left = leftDist20 + "px";
            leveleight.style.top = height20 + "px";
            leveleight.style.background = "none";
            leveleight.style.border = "none";
            leveleight.style.position = "absolute";
            leveleight.id = "leveleight";
            document.body.appendChild(leveleight);

            leveleight.onclick = function () {
                startLevel(level8);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var levelnine = document.createElement('input');
            levelnine.type = "button";
            levelnine.style.width = buttonWidth18Num + "px";
            levelnine.style.height = buttonHeight18Num + "px";
            levelnine.style.left = leftDist21 + "px";
            levelnine.style.top = height21 + "px";
            levelnine.style.background = "none";
            levelnine.style.border = "none";
            levelnine.style.position = "absolute";
            levelnine.id = "levelnine";
            document.body.appendChild(levelnine);

            levelnine.onclick = function () {
                startLevel(level9);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            var levelten = document.createElement('input');
            levelten.type = "button";
            levelten.style.width = buttonWidth19Num + "px";
            levelten.style.height = buttonHeight19Num + "px";
            levelten.style.left = leftDist22 + "px";
            levelten.style.top = height22 + "px";
            levelten.style.background = "none";
            levelten.style.border = "none";
            levelten.style.position = "absolute";
            levelten.id = "levelten";
            document.body.appendChild(levelten);

            levelten.onclick = function () {
                startLevel(level10);
                levelone.parentNode.removeChild(levelone)
                leveltwo.parentNode.removeChild(leveltwo)
                levelthree.parentNode.removeChild(levelthree)
                levelfour.parentNode.removeChild(levelfour)
                levelfive.parentNode.removeChild(levelfive)
                levelsix.parentNode.removeChild(levelsix)
                levelseven.parentNode.removeChild(levelseven)
                leveleight.parentNode.removeChild(leveleight)
                levelnine.parentNode.removeChild(levelnine)
                levelten.parentNode.removeChild(levelten)
                back.parentNode.removeChild(back)

                var pause = document.createElement('input');
            pause.type = "button";
            pause.style.width = buttonWidth4Num + "px";
            pause.style.height = buttonHeight4Num + "px";
            pause.style.left = leftDist7 + "px";
            pause.style.top = height7 + "px";
            pause.style.background = "none";
            pause.style.border = "none";
            pause.style.position = "absolute";
            pause.id = "pause";
            document.body.appendChild(pause);

            pause.onclick = function () {
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                if (pad) {
                clearInterval(pad);
                }
                alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);             
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
                pause1.style.border = "none";
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
                pause2.style.border = "none";
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
                    back1.style.border = "none";
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
                pause3.style.border = "none";
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
            restart.style.border = "none";
            restart.style.position = "absolute";
            restart.id = "restart";
            document.body.appendChild(restart);

            restart.onclick = function () {
                startLevel(level);

            }

            var mute = document.createElement('input');
            mute.type = "button";
            mute.style.width = buttonWidth9Num + "px";
            mute.style.height = buttonHeight9Num + "px";
            mute.style.left = leftDist12 + "px";
            mute.style.top = height12 + "px";
            mute.style.background = "none";
            mute.style.border = "none";
            mute.style.position = "absolute";
            mute.id = "mute";
            document.body.appendChild(mute);

            mute.onclick = function () {
                //mute button broken

            }
            };

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            var back = document.createElement('input');
            back.type = "button";
            back.style.width = buttonWidth1Num + "px";
            back.style.height = buttonHeight1Num + "px";
            back.style.left = leftDist4 + "px";
            back.style.top = height4 + "px";
            back.style.background = "none";
            back.style.border = "none";
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
        highscores.style.border = "none";
        highscores.style.position = "absolute";
        highscores.id = "highscores";
        document.body.appendChild(highscores);

        highscores.onclick = function () {
            highscoreMeta();
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
            back.style.border = "none";
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
        instructions.style.border = "none";
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
            back.style.border = "none";
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