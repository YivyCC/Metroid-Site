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
let widthMatch = window.matchMedia("(max-width: 500px)");
// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
      window.addEventListener('scroll', () =>{
        const scrollPosition = window.scrollY;
        const transparency = Math.max(0, 1 - scrollPosition / 150); 
        header.style.background = `rgb(34, 34, 34, ${transparency})`;
      });
    }
    else {
      
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


