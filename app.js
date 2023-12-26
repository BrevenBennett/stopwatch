const timerMinutes = document.querySelector(".timer__minutes");
const timerSeconds = document.querySelector(".timer__seconds");
const timerMilliseconds = document.querySelector(".timer__milliseconds");

let cancelId;
let startTime;
let savedTime = 0;

function start() {
  startTime = Date.now();
  cancelId = requestAnimationFrame(updateTimer);
}

function stop() {
  savedTime = savedTime + Date.now() - startTime;
  cancelAnimationFrame(cancelId);
}

function reset() {
  startTime = Date.now();
  savedTime = 0;

  timerMilliseconds.innerHTML = "000";
  timerSeconds.innerHTML = "00";
  timerMinutes.innerHTML = "00";
}

const zeroPad = (num, places) => {
  return String(num).padStart(places, 0);
};

function updateTimer() {
  let millisElapsed = savedTime + Date.now() - startTime;
  let secondsElapsed = millisElapsed / 1000;
  let minutesElapsed = secondsElapsed / 60;

  timerMilliseconds.innerHTML = zeroPad(millisElapsed % 1000, 3);
  timerSeconds.innerHTML = zeroPad(Math.floor(secondsElapsed % 60), 2);
  timerMinutes.innerHTML = zeroPad(Math.floor(minutesElapsed), 2);
  cancelId = requestAnimationFrame(updateTimer);
}
