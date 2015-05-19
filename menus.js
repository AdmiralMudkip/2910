       
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
            console.log(x);
            //removes the "px" from x, returns just a number, puts it into buttonWidthNum
            var buttonWidthNum = parseInt(x);
            //reduces buttonWidthNum to be half of what it was, change this to whatever, but use multiplication 
            buttonWidthNum = (buttonWidthNum * .5);
            console.log(buttonWidthNum);
            
            var play = document.createElement('input');
        play.type = "button";
            //have to append "px" to it, otherwise it doesn't work
        play.style.width = buttonWidthNum + "px";
            console.log(play.style.width);
        play.style.height = '52px';
        play.style.left = '750px';
        play.style.top = '100px';
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
        levelselect.style.width = '270px';
        levelselect.style.height = '52px';
        levelselect.style.left = '746px';
        levelselect.style.top = '168px';
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
        highscores.style.width = '270px';
        highscores.style.height = '52px';
        highscores.style.left = '745px';
        highscores.style.top = '234px';
        highscores.style.background = "none";
        highscores.style.border = "none";
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
        instructions.style.width = '270px';
        instructions.style.height = '52px';
        instructions.style.left = '748px';
        instructions.style.top = '310px';
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
        
        
