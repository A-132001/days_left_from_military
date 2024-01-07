// Get the current date and the target date
var currentDate = new Date();
var targetDate = new Date("2024-12-1");

// Calculate the time difference in milliseconds
var timeDiff = targetDate.getTime() - currentDate.getTime();

// Convert the time difference to days
var daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// Display the countdown
var countdownElement = document.getElementById("countdown");
countdownElement.innerHTML = "Days Left " + daysLeft;

// add time left the the day
function displayTime() {
  var currentDate = new Date();
  var hours = 24 - currentDate.getHours();
  var minutes = 60 - currentDate.getMinutes();
  var seconds = 60 - currentDate.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").innerHTML = timeString;
}
setInterval(displayTime, 1000); // update every second
