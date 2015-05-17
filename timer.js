
/*timer counting up*/
var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    //document.getElementById("score").innerHTML = pad(parseInt(120 - sec));
}, 1000);

/*clearTimer: Pauses timer,creates alert displaying it's time, timer
continues when alert closes*/
function clearTimer() {
    if (pad) {
       clearInterval(pad);
    }
    alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);
}
