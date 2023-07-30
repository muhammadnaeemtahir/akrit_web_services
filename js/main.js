"use strict";

// apply changes to the navbar when the user scrolls the page
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const threshold = 0;

  if (window.scrollY > threshold) {
    navbar.classList.add("bg-dark");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-white");
  }
});

const splideItems = document.querySelectorAll(".splide");
// testimonials initialization
document.addEventListener("DOMContentLoaded", function () {
  function updateSplidePerPage() {
    let splideOptions = {
      type: "loop",
      perMove: 1,
    };

    if (window.matchMedia("(max-width: 950px)").matches) {
      splideOptions.perPage = 1;
      splideOptions.autoplay = true;
      splideOptions.arrows = false;
      splideOptions.speed = 1000;
    } else {
      splideOptions.autoplay = true;
      splideOptions.speed = 1000;
      splideOptions.perPage = 3;
    }

    let splide = new Splide(splideItems[1], splideOptions);

    splide.mount();
  }

  updateSplidePerPage();
  window.addEventListener("resize", updateSplidePerPage);
});

// technologies initialization
document.addEventListener("DOMContentLoaded", function () {
  function updateSplidePerPage() {
    let splideOptions = {
      type: "loop",
      perMove: 1,
    };

    if (window.matchMedia("(max-width: 950px)").matches) {
      splideOptions.perPage = 2;
      splideOptions.autoplay = true;
      splideOptions.arrows = false;
      splideOptions.speed = 1000;
    } else {
      splideOptions.speed = 1000;
      splideOptions.autoplay = true;
      splideOptions.perPage = 5;
    }

    let splide = new Splide(splideItems[0], splideOptions);

    splide.mount();
  }

  updateSplidePerPage();
  window.addEventListener("resize", updateSplidePerPage);
});

// fancybox initialization
Fancybox.bind("[data-fancybox]", {});
