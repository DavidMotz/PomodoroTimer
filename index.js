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
            start = Date.now() + 1000;
        }
    };

    timer();
    setInterval(timer, 1000);
}

document.getElementById("start25").onclick = function(){
    var fiveMinutes = 60 * 25,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}

document.getElementById("start5").onclick = function(){
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}