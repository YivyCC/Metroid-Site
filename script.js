const navBarBtn = document.querySelector(".header__navbar-btn");
const navBarList = document.querySelector(".navbar__nav");
const navBar = document.querySelector(".navbar");

navBarBtn.addEventListener("click", () =>{
  navBar.classList.toggle("appear");
  navBarBtn.classList.toggle("nav-btn-toggle");
});
