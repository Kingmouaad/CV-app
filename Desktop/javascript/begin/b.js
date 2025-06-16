const n = 3;

const input = document.querySelector('input[type="submit"]');

const random = Math.floor(Math.random() * 100);
const ilyes = document.createElement("p");
const ilyesText = document.querySelector("div");
ilyesText.appendChild(ilyes);
function addEvent(e) {
  e.preventDefault();
  const answer = document.querySelector("input[type='text']").value;
  if (answer == random) {
    ilyes.textContent = "You are correct, the number was " + random;
  }
  if (answer > random) {
    ilyes.textContent = "You are too high";
    n--;
  }
  if (answer < random) {
    ilyes.textContent = "You are too low";
    n--;
  }
}
input.addEventListener("click", addEvent);
