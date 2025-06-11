// script.js
// Adds dynamic behavior (optional)

document.addEventListener("DOMContentLoaded", () => {
  // Highlight the current nav link
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.borderBottom = "3px solid #d81b60";
    }
  });

  // Example feature: Countdown to next match (if you want)
  const countdownContainer = document.querySelector("#countdown");
  if (countdownContainer) {
    const matchDate = new Date("March 23, 2025 19:30:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = matchDate - now;

      if (distance < 0) {
        countdownContainer.innerHTML = "Match Started!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownContainer.innerHTML = `Next Match in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});
