
/*timer counting up*/
var sec = 0;
var mili = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval(function () {
    document.getElementById("milliseconds").innerHTML = pad(++mili % 60);
    document.getElementById("seconds").innerHTML = pad(parseInt(mili / 60, 10)); //++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
}, 17);

function clearTimer() {
    if (pad) {
       clearInterval(pad);
    }
    alert(document.getElementById("minutes").innerHTML + ':' + document.getElementById("seconds").innerHTML);
}
