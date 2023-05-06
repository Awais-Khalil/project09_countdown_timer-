#! /usr/bin/env node
function countdown(targetDate) {
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeLeft = targetDate.getTime() - currentTime;
        if (timeLeft <= 0) {
            clearInterval(interval);
            console.log("Countdown finished!");
        }
        else {
            const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
            console.log(`Countdown: ${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`);
        }
    }, 1000);
}
// Example usage: countdown to Dec 25, 2023 at 12:00:00
const targetDate = new Date("Dec 25, 2023 12:00:00");
countdown(targetDate);
export {};
