let hamburgerMenu = document.querySelector("#hamburgerMenu");
let hamburgerBtn = document.querySelector("#hamburgerBtn");
let hamburger = document.querySelector("#hamburger");
let close = document.querySelector("#close");

hamburgerBtn.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("-left-full");
  hamburgerMenu.classList.toggle("left-0");
  document.body.classList.toggle("overflow-y-hidden");
  hamburger.classList.toggle("hidden");
  close.classList.toggle("hidden");
});
