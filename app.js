const features = document.querySelector(".features");
const company = document.querySelector(".company");
const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".close");
const navContainer = document.querySelector(".nav__container");
const bgMobile = document.querySelector(".bg__mobile");

hamburger.addEventListener("click", () => {
  hamburger.classList.add("dispear");
  navContainer.classList.add("nav__mobile");
  bgMobile.classList.add("display");
  cross.classList.remove("dispear");
});

cross.addEventListener("click", () => {
  cross.classList.add("dispear");
  navContainer.classList.remove("nav__mobile");
  bgMobile.classList.remove("display");
  hamburger.classList.remove("dispear");
});

features.addEventListener("click", () => {
  company.classList.remove("down");
  features.classList.toggle("down");
});

company.addEventListener("click", () => {
  company.classList.toggle("down");
  features.classList.remove("down");
});
