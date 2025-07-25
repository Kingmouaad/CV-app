const menu = document.querySelector(".menu div");
const svg = document.querySelector("svg");
menu.style.transition = "all 0.3s ease";
menu.addEventListener("mouseover", () => {
  svg.style.width = "28px";
  svg.style.height = "28px";
});
menu.addEventListener("mouseleave", () => {
  svg.style.width = "22px";
  svg.style.height = "22px";
});
