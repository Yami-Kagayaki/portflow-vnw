const btn = document.getElementById("headerbtn");
const nav = document.getElementById("nav");

function menu(event) {
  if (event.type === "touchstart") event.preventDefaut(); //previne 2 clicks no touch
  nav.classList.toggle("active"); //Ao click add a classe e retira caso tenha
}

btn.addEventListener("click", menu);
btn.addEventListener("touchstart", menu);
