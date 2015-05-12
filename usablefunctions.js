//when you click the level you wish to play this runs
    function startLevel(level) {
        currentLevel = level;
        levelBackground(currentLevel);
        var i;
        var boatCurrentDir = right;
        var win = 0;
        var lose = 0;
        var treasureGrabbed = 0;
        var boatLocX, boatLocY;
        
        for(i = 0; i < currentLevel.length.length; i++) {
            if(currentLevel[1][i] == boat) {
                boatLocX = 1;
                boatLocY = i;
            }
        }

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