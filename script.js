window.onload = onLoad;

function onLoad() {
  const elements = document.querySelectorAll(".dark");

  document.querySelector(".mode-toggle-container").addEventListener("click", toggleMode);
  
  function toggleMode() {
    elements.forEach(element => element.classList.toggle("dark"));
    elements.forEach(element => element.classList.toggle("light"));
    document.querySelector(".toggle-slider").classList.toggle("right");
  }
  
}