const header = document.querySelector("header");
const navButton = document.querySelector(".btn-mobile-nav");

navButton.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
