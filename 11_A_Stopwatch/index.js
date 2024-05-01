let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function watchTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":"  + s;
}

function startWatch() {
    if (timer != null) {
        clearInterval(timer);
    }
    timer = setInterval(watchTimer, 1000);
}

function stopWatch() {
    clearInterval(timer);
}

function resetWatch() {
    stopWatch();
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00"
}