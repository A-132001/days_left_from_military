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
