const header = document.querySelector("header");
const navButton = document.querySelector(".btn-mobile-nav");
const hero = document.querySelector(".hero");

// Hamburger menu
navButton.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Sticky navigation
function stickyNav(entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.5,
});

heroObserver.observe(hero);
