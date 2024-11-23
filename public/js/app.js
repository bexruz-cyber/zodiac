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

let footerDropDown = document.querySelector("#footerDropDown");
let footerThemeBtn = document.querySelector("#footerThemeBtn");
let footerDropDownText = document.querySelector(".footerDropDownText");
let footerDropDownTitle = document.querySelector("#footerDropDownTitle");

// Dropdownni ochish-yopish
footerThemeBtn.addEventListener("click", function () {
  footerDropDown.classList.toggle("h-11");
  footerDropDown.classList.toggle("h-[70px]");
  footerDropDownText.classList.toggle("opacity-0");
  document.documentElement.classList.toggle('dark'); // Dark mode'ni yoqish yoki o'chirish
});

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
};

// Faqat matnni almashtirish va dropdownni yopish
footerDropDownText.addEventListener("click", function () {
  toggleDarkMode()
  if (footerDropDownTitle.textContent.trim() === "Темная тема") {
    footerDropDownTitle.textContent = "Светлая тема";
    footerDropDownText.textContent = "Темная тема.";
  } else {
    footerDropDownTitle.textContent = "Темная тема";
    footerDropDownText.textContent = "Светлая тема.";
  }

  footerDropDown.classList.add("h-11");
  footerDropDown.classList.remove("h-[70px]");
  footerDropDownText.classList.add("opacity-0");
});

let monthTitle = document.querySelector(".monthTitle");
let monthTexts = document.querySelectorAll(".monthText");

monthTexts.forEach((monthText) => {
  monthText.addEventListener("click", function () {
    monthTitle.textContent = monthText.textContent.trim();
  });
});