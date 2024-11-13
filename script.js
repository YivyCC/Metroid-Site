const navBarBtn = document.querySelector('.header__navbar-btn');
const navBarList = document.querySelector(".navbar__nav");
const navBar = document.querySelector(".navbar");

navBarBtn.addEventListener("click", () =>{
  navBarList.classList.add("appear");
  navBar.classList.add("appear");
});
