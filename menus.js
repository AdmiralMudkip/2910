
        window.onload = function () {
            var WIDTH = 720;
            var HEIGHT = 480;
            
            window.currentWidth = window.WIDTH;
        window.currentHeight = window.HEIGHT;
        window.canvas = document.getElementById('canvas');
        window.canvas.width = window.WIDTH;
        window.canvas.height = window.HEIGHT;
        window.ctx = window.canvas.getContext('2d');

            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var img = new Image()
            img.src = "images/mainmenu.png"
            context.drawImage(img, 0, 0, 720, 480);

        }

        var play = document.createElement('input');
        play.type = "button";
        play.style.width = '270px';
        play.style.height = '52px';
        play.style.left = '833px';
        play.style.top = '100px';
        play.style.background = "none";
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
        levelselect.style.width = '482px';
        levelselect.style.height = '68px';
        levelselect.style.left = '758px';
        levelselect.style.top = '268px';
        levelselect.style.background = "none";
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

        };

        var highscores = document.createElement('input');
        highscores.type = "button";
        highscores.style.width = '482px';
        highscores.style.height = '68px';
        highscores.style.left = '760px';
        highscores.style.top = '366px';
        highscores.style.background = "none";
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
        };

        var instructions = document.createElement('input');
        instructions.type = "button";
        instructions.style.width = '482px';
        instructions.style.height = '68px';
        instructions.style.left = '764px';
        instructions.style.top = '480px';
        instructions.style.background = "none";
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
        };

