
function highscoreMeta() {
        var i,j;
        var scores;
        var info;
        var data;

        // Get a number of top scores
        function getTopScores (ctx, callback, context) {
            
	     $.ajax({
                type: 'GET',
                dataType: 'json',
                url: 'https://highscore2910.herokuapp.com/scores/',
                success: function(data) {
                    scores = data;
                    
                    if (callback) callback();
		  },
		  error: function(xhr, msg) {
              console.error('AJAX error', xhr.status, msg);
                }
            });
            console.log("Highscores retrieved.");
            return scores;
        };
        
        // Post a score
        
    
        getTopScores();
        //have to delay, because it takes a second to get the scores
        setTimeout(function(){timer(scores)}, 750);
            
        function timer(data) {
            //sorts by time
            var found = [];
            
            data.sort(function(a,b) {
                return a.name.localeCompare(b.name);
            });
            
            ctx.font = "20px sans serif";
            ctx.fillStyle = "white";
            for (var i = 0; i < 10; i ++) {
                var string = i.toString();
                var level = "level";
                var print;
                var running = [[]];
                var running = data.filter(function (person) {return person.name == (level.concat(string))});
                running.sort(function(a,b) { return parseInt(b.time) - parseInt(a.time)});  
                print = running[0].time;
                
                ctx.fillText(print, ((57 * i) + 120), 290);
                //console.log(print);
            }
        }
}
        function postScore (ctx, name, time, callback) {
            console.log('Posting score', name, time);
            $.ajax({
                type: 'POST',
                url: 'https://highscore2910.herokuapp.com/scores/',
                data: {
                    name: name,
                    time: time,
                },
		  success: function(data) {
              console.log('Score posted', data);
              if (callback) callback();
          },
                error: function(xhr, msg) {
                    console.error('AJAX error', xhr.status, msg);
                }
	   });

        };
        //posting works!
        //postScore(context, 'POST', 30);