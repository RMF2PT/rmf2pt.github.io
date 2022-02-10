let minutes = 00;
let seconds = 00;
let cents = 00;

let appendMinutes = document.getElementById('minutes');
let appendSeconds = document.getElementById('seconds');
let appendCents = document.getElementById('cents');
let buttonStart = document.getElementById('btn-start');
let buttonStop = document.getElementById('btn-stop');
let buttonReset = document.getElementById('btn-reset');
let interval; // to store timer values

buttonStop.disabled = true;
buttonReset.disabled = true;

function startTimer() {
  cents++;
  if (cents < 9) {
    appendCents.innerHTML = '0' + cents;
  }
  if (cents > 9) {
    appendCents.innerHTML = cents;
  }
  if (cents > 99) {
    seconds++;
    appendSeconds.innerHTML = '0' + seconds;
    cents = 0;
    appendCents.innerHTML = '0' + cents;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = '0' + minutes;
    seconds = 0;
    appendSeconds.innerHTML = '0' + seconds;
  }
  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }
}

buttonStart.onclick = function() {
  interval = setInterval(startTimer);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  buttonReset.disabled = false;
};

buttonStop.onclick = function() {
  clearInterval(interval);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
};

buttonReset.onclick = function() {
  clearInterval(interval);
  cents = '00';
  seconds = '00';
  minutes = '00';
  appendCents.innerHTML = cents;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  buttonReset.disabled = true;
};

// var myInterval;
// let i = 0;
// function myTimer() {
//   document.getElementById("demo").innerHTML = i;
//   i++;
// }

// document.getElementById('btn-stop').addEventListener('click',function(){
//   clearInterval(myInterval);
//   myInterval = null; //clean myInterval
// })

// document.getElementById('btn-start').addEventListener('click',function(){
//   myInterval = setInterval(myTimer, 1000);
// })