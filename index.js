let timerRunning = false;
let interval
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {

        diff = duration - (((Date.now() - start) / 1000) | 0);


        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            timerRunning = false;
        }
    };

    timer();
        interval = setInterval(() => {
        timer();
        if(timerRunning == false){
            clearInterval(interval);
        }
    }, 1000);
}

document.getElementById("start25").onclick = function(){
    var fiveMinutes =  60 * 25,
        display = document.querySelector('#time');
        timerRunning = true;
        clearInterval(interval);
        startTimer(fiveMinutes, display);
}

document.getElementById("start5").onclick = function(){
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
        timerRunning = true;
        clearInterval(interval);
        startTimer(fiveMinutes, display);
}