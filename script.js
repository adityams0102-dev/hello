const deadline = Date.now() + 1000 * 60 * 60 * 18;
const countdownEl = document.getElementById('countdown');

function updateCountdown() {
  const diff = Math.max(0, deadline - Date.now());
  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

  if (countdownEl) {
    countdownEl.textContent = `Ends in ${hours}:${minutes}:${seconds}`;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
