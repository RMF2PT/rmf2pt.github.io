let myHours = document.getElementById('hours');
let myMinutes = document.getElementById('minutes');
let mySeconds = document.getElementById('seconds');

function timeNow() {
  let dateNow = new Date();
  let hoursNow = dateNow.getHours();
  let minutesNow = dateNow.getMinutes();
  let secondsNow = dateNow.getSeconds();
  myHours.innerHTML = hoursNow < 10 ? '0' + hoursNow : hoursNow;
  myMinutes.innerHTML = minutesNow < 10 ? '0' + minutesNow : minutesNow;
  mySeconds.innerHTML = secondsNow < 10 ? '0' + secondsNow : secondsNow;
}
setInterval(timeNow, 1000);

function displayClock() {
  let display = new Date().toLocaleTimeString();
  document.getElementById('localTime').innerHTML = display;
}
setInterval(displayClock, 1000);