const countdown = document.querySelector(".countdown");

// Set the start date in ms;
const startDate = new Date("Mar 21 2019 7:30:00").getTime();

// Update every second
const interval = setInterval(() => {
	// Get Today today's date and time in ms
	const currentDate = new Date().getTime();

	// Difference between currentDate and startDate
	const difference = startDate - currentDate;

	// Time Calculation
	const days = Math.floor(difference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((difference % (1000 * 60)) / 1000);

	// Display result
	countdown.innerHTML = `
		<div>${days}<span>Days</span></div>
		<div>${hours}<span>Hours</span></div>
		<div>${minutes}<span>Minutes</span></div>
		<div>${seconds}<span>Seconds</span></div>
	`;

	// If start date has passed
	if (difference <= 0) {
		// Stop countdown
		clearInterval(interval);
		// Style and output
		countdown.style.color = "#17a2b8";
		countdown.innerHTML = "I hope you did your SEEs Amazing!";
	}
}, 1000);
