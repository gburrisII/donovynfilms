// scripts for ham-menu and off-screen-menu
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  // Disable scroll when off-screen menu is active, enable when inactive
  if (offScreenMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = ""; // Enable scroll (revert to default)
  }
});

// scripts for services section (accordion)
const accordionTitles = document.querySelectorAll(".accordionTitle");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("is-open")) {
      accordionTitle.classList.remove("is-open");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open");
    }
  });
});

// scripts for slideshow section (accordion)
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// scripts for contact me pop up page
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');

    // Disable or enable background scroll based on popup visibility
    if (overlay.classList.contains('show')) {
        document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
        document.body.style.overflow = ''; // Enable scroll (revert to default)
    }
}
