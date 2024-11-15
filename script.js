const navBarBtn = document.querySelector(".header__navbar-btn");
const navBarList = document.querySelector(".navbar__nav");
const navBar = document.querySelector(".navbar");
const header = document.querySelector(".header");

//Nav-bar trigger btn
navBarBtn.addEventListener("click", () =>{
  navBar.classList.toggle("appear");
  navBarBtn.classList.toggle("nav-btn-toggle");
});

//Header background color transparency 'animation'
window.addEventListener('scroll', () =>{
  const scrollPosition = window.scrollY;
  const transparency = Math.max(0, 1 - scrollPosition / 150); 
  header.style.background = `rgb(34, 34, 34, ${transparency})`;
});
