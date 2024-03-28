
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let sec = 0;
let millisec = 0;
let timeInterval;

const timer = () => {
    millisec++;

    if (millisec < 9) {
        milliseconds.innerHTML = "0" + millisec;
    }
    if (millisec > 9) {
        milliseconds.innerHTML = millisec;
    }
    if (millisec > 99) {
        sec++;
        
        if (sec < 10) {
            seconds.innerHTML = "0" + sec;
        } else {
            seconds.innerHTML = sec;
        }
        
        millisec = 0;
        milliseconds.innerHTML = "0" + 0;
    }
    if (sec > 9) {
        seconds.innerHTML = sec;
    }
};

// start
start.addEventListener("click", () => {
    timeInterval = setInterval(timer, 10);
});

// stop
stop.addEventListener("click", () => {
    clearInterval(timeInterval);
});

// reset
reset.addEventListener("click", () => {
    clearInterval(timeInterval);
    sec = 0;
    millisec = 0;
    seconds.innerHTML = "00";
    milliseconds.innerHTML = "00";
});



