"use strict";

const splideItems = document.querySelectorAll(".splide");

// testimonials initialization
document.addEventListener("DOMContentLoaded", function () {
  function updateSplidePerPage() {
    let splideOptions = {
      type: "loop",
      perMove: 1,
    };

    if (window.matchMedia("(max-width: 768px)").matches) {
      splideOptions.perPage = 1;
      splideOptions.autoplay = true;
      splideOptions.arrows = false;
    } else {
      splideOptions.perPage = 3;
    }

    let splide = new Splide(splideItems[1], splideOptions);

    splide.mount();
  }

  updateSplidePerPage();
  window.addEventListener("resize", updateSplidePerPage);
});

document.addEventListener("DOMContentLoaded", function () {
  function updateSplidePerPage() {
    let splideOptions = {
      type: "loop",
      perMove: 1,
    };

    if (window.matchMedia("(max-width: 768px)").matches) {
      splideOptions.perPage = 2;
      splideOptions.autoplay = true;
      splideOptions.arrows = false;
    } else {
      splideOptions.autoplay = true;
      splideOptions.perPage = 5;
    }

    let splide = new Splide(splideItems[0], splideOptions);

    splide.mount();
  }

  updateSplidePerPage();
  window.addEventListener("resize", updateSplidePerPage);
});
