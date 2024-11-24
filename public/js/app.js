document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menyu funksiyalari
  const hamburgerMenu = document.querySelector("#hamburgerMenu");
  const hamburgerBtn = document.querySelector("#hamburgerBtn");
  const hamburger = document.querySelector("#hamburger");
  const close = document.querySelector("#close");

  if (hamburgerBtn && hamburgerMenu && hamburger && close) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerMenu.classList.toggle("-left-full");
      hamburgerMenu.classList.toggle("left-0");
      document.body.classList.toggle("overflow-y-hidden");
      hamburger.classList.toggle("hidden");
      close.classList.toggle("hidden");
    });
  }

  // Footer dropdown funksiyalari
  const footerDropDown = document.querySelector("#footerDropDown");
  const footerThemeBtn = document.querySelector("#footerThemeBtn");
  const footerDropDownText = document.querySelector(".footerDropDownText");
  const footerDropDownTitle = document.querySelector("#footerDropDownTitle");

  if (footerDropDown && footerThemeBtn && footerDropDownText && footerDropDownTitle) {
    // Dropdownni ochish-yopish
    footerThemeBtn.addEventListener("click", function () {
      footerDropDown.classList.toggle("h-11");
      footerDropDown.classList.toggle("h-[70px]");
      footerDropDownText.classList.toggle("opacity-0");
      document.documentElement.classList.toggle("dark");
    });

    // Matnni almashtirish va dropdownni yopish
    footerDropDownText.addEventListener("click", function () {
      document.documentElement.classList.toggle("dark");
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
  }

  
  // Oy matnini almashtirish funksiyalari
  const monthTitle = document.querySelector(".monthTitle");
  const monthTexts = document.querySelectorAll(".monthText");

  if (monthTitle && monthTexts.length) {
    monthTexts.forEach((monthText) => {
      monthText.addEventListener("click", function () {
        monthTitle.textContent = monthText.textContent.trim();
      });
    });
  }
});
