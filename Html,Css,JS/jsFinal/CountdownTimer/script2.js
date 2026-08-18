function updateTimer() {
    // Get input values
    const startValue = document.getElementById("start-Date").value;
    const endValue = document.getElementById("end-Date").value;

    // Don't do anything until both dates are selected
    if (!startValue || !endValue) {
        return;
    }

    const startDate = new Date(startValue).getTime();
    const endDate = new Date(endValue).getTime();
    const now = Date.now();

    // Validate dates
    if (isNaN(startDate) || isNaN(endDate)) {
        return;
    }

    // Ensure end date is after start date
    if (endDate <= startDate) {
        alert("End date must be greater than Start date.");
        clearInterval(timer);
        return;
    }

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    // Countdown calculation
    const days = Math.floor(distancePending / oneDay);
    const hours = Math.floor((distancePending % oneDay) / oneHour);
    const mins = Math.floor((distancePending % oneHour) / oneMinute);
    const secs = Math.floor((distancePending % oneMinute) / oneSecond);

    // Update UI
    document.getElementById("days").textContent = Math.max(days, 0);
    document.getElementById("hr").textContent = Math.max(hours, 0);
    document.getElementById("min").textContent = Math.max(mins, 0);
    document.getElementById("sec").textContent = Math.max(secs, 0);

    // Progress bar
    const totalDistance = endDate - startDate;
    let percentage = (distanceCovered / totalDistance) * 100;

    // Keep percentage between 0 and 100
    percentage = Math.min(Math.max(percentage, 0), 100);

    document.getElementById("progress-bar").style.width = percentage + "%";

    // Timer completed
    if (distancePending <= 0) {
        clearInterval(timer);

        document.getElementById("days").textContent = "00";
        document.getElementById("hr").textContent = "00";
        document.getElementById("min").textContent = "00";
        document.getElementById("sec").textContent = "00";

        document.getElementById("progress-bar").style.width = "100%";

        alert("⏰ Countdown Finished!");
    }
}

// Update every second
const timer = setInterval(updateTimer, 1000);