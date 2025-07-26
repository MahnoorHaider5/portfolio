// Scroll Progress Bar
window.onscroll = function() {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Dark Mode Toggle
document.getElementById("toggle-theme").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// Typewriter Effect
const text = "Full-Stack Web Developer | UI/UX Enthusiast | Tech Explorer";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
window.onload = typeEffect;

// AOS Init
AOS.init({ duration: 1000, once: true });
