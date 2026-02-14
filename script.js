// Set the date of meeting
const countDownDate = new Date("March 24, 2029 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();   // current time
    const distance = countDownDate - now;

    // Time calculations
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "💖 We are together! 💖";
    }
}, 1000);
