const navBarBtn = document.querySelectorAll(".header__navbar-btn");
const navBar = document.querySelector(".navbar");
const header = document.querySelector(".header");

//Nav-bar trigger btn
function toggleNavBar() {
  navBar.classList.toggle("appear");
  navBarBtn.forEach(btn => {
    btn.classList.toggle("nav-btn-toggle");
  });
}
navBarBtn.forEach(btn => {
  btn.addEventListener("click", toggleNavBar);
});

//Header background color transparency 'animation'
let widthMatch = window.matchMedia("(max-width: 500px)");
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
      window.addEventListener('scroll', () =>{
        const scrollPosition = window.scrollY;
        const transparency = Math.max(0, 1 - scrollPosition / 150); 
        header.style.background = `rgb(34, 34, 34, ${transparency})`;
      });
    }
    else {
      //nada papu
    }
});

//Slider
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainers = document.querySelectorAll(".main__slider-wrapper");
  sliderContainers.forEach(container => {
    initializeSlider(container);
  });
});

function initializeSlider(container) {
  const slides = container.querySelectorAll(".slider-image");
  const prevBtn = container.querySelector(".prev");
  const nextBtn = container.querySelector(".next");
  let slideIndex = 0;
  let intervalID = null;

  slides[slideIndex].classList.add("display-slide");
  intervalID = setInterval(nextSlide, 5000);

  function showSlide(index) {
    index >= slides.length ? slideIndex = 0 : index < 0 ? slideIndex = slides.length - 1 : slideIndex = index;

    slides.forEach(slide => slide.classList.remove("display-slide"));
    slides[slideIndex].classList.add("display-slide");
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  prevBtn.addEventListener("click", () => {
    slideIndex--;
    clearInterval(intervalID);
    showSlide(slideIndex);     
  });

  nextBtn.addEventListener("click", () => {
    slideIndex++;
    clearInterval(intervalID); 
    showSlide(slideIndex); 
  });
}


