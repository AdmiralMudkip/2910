//when you click the level you wish to play this runs
    function startLevel(level) {
        currentLevel = level;
        var i;
        var boatCurrentDir = right;
        var win = 0;
        var lose = 0;
        var treasureGrabbed = 0;
        var boatLocX, boatLocY;

        for (i = 0; i < currentLevel.length; i++) {
            if (currentLevel[i][1] == boat) {
                boatLocX = i;
                boatLocY = 1;
            }
        }

        levelBackground(currentLevel);

        var boatMoveSound = boatSound();
        var music = backgroundMusic(currentLevel);

        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

        music.play();

        window.ctx.drawImage(document.getElementById("boat"), (((boatLocX - 1) * 64) + 265), (((boatLocY - 1) * 64) + 145));
        
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
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + 265), (((boatLocX - 1) * 64) + 145));
                boatMoveSound.play();
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
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + 265), (((boatLocX - 1) * 64) + 145));
                boatMoveSound.play();
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
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + 265), (((boatLocX - 1) * 64) + 145));
                boatMoveSound.play();
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
                levelBackground(currentLevel);
                window.ctx.drawImage(document.getElementById("boat"), (((boatLocY - 1) * 64) + 265), (((boatLocX - 1) * 64) + 145));
                boatMoveSound.play();
            } 
        }
        

        if(win == 1) {
            winner();
            init();
        }
        if(lose == 1) {
            loser();
            init();
        }
        
    };
    
    //this starts the level setup animation
    function levelAnim(level) {
        
    }
    //draws the level background
    function levelBackground(level) {
        window.ctx.drawImage(document.getElementById("" + currentLevel.name), 0, 0, window.canvas.width, window.canvas.height);
    };

    //boat moving sound
    function boatSound() {
        return new Audio("sound/oarswater-000.ogg", true);
    }

    //background music depending on where you are in the game
    function backgroundMusic(location) {
        if(location.name == "LevelOne") {
            return new Audio("sound/background.mp3", true);
        }
    }