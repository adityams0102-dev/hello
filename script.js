const end = new Date();
end.setDate(end.getDate() + 5);

function updateTimer() {
  const diff = end - new Date();
  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.querySelector('[data-unit="days"]').textContent = String(days).padStart(2, '0');
  document.querySelector('[data-unit="hours"]').textContent = String(hours).padStart(2, '0');
  document.querySelector('[data-unit="minutes"]').textContent = String(minutes).padStart(2, '0');
  document.querySelector('[data-unit="seconds"]').textContent = String(seconds).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);
