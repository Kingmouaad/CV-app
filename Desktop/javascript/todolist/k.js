const input = document.querySelector("input[type=text]").value;
function add() {
  const zid = document.createElement("input[type=radio]");
  const div = document.querySelector(".ADD");
  //   const input = document.querySelector("input[type=text]").value;
  zid.value = input;
  div.appendChild(zid);
  input = "";
}

// function kaka() {
//   console.log("kaka");
// }
const button = document.querySelector("button");
button.addEventListener("click", add);
