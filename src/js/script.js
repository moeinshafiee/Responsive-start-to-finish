const nav = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const ham = document.querySelector('.hamburger');

nav.addEventListener("click", () => {
  mainNav.classList.toggle("is-open");
  ham.classList.toggle("is-open");
});

