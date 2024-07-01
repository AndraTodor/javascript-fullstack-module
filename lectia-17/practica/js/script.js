const timeEl = document.getElementById("time");
const stopBtnEl = document.getElementById("stopBtn");
const continueBtnEl = document.getElementById("continueBtn");

const newYearDate = new Date(`January 1, ${new Date().getFullYear() + 1}`);

let intervalId = setInterval(calculateTimeFromNY, 1000);
let isTimeRunning = true;

stopBtnEl.addEventListener("click", () => {
  stopInterval();
  if (!isTimeRunning) {
    continueBtnEl.disabled = false;
    continueBtnEl.addEventListener("click", continueInterval);
  }
});

function calculateTimeFromNY() {
  const now = Date.now();
  const newYear = new Date().getFullYear() + 1;
  const newYearDate = new Date(`January 1 ${newYear}`);

  const diff = newYearDate - now;

  const { days, hours, minutes, seconds } = formatDateTime(diff);
  timeEl.textContent = `${days} d. ${hours} h. ${minutes} m ${seconds} s`;
}

function formatDateTime(value) {
  const days = Math.floor(value / (1000 * 60 * 60 * 24));
  const hours = Math.floor((value / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((value / (1000 * 60)) % 60);
  const seconds = Math.floor((value / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function stopInterval() {
  isTimeRunning = false;
  clearInterval(intervalId);
}

function continueInterval() {
  isTimeRunning = true;
  continueBtnEl.disabled = true;
  intervalId = setInterval(calculateTimeFromNY, 1000);
}
