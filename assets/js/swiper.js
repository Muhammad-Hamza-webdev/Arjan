var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 9,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1366: { slidesPerView: 8 },
    1200: { slidesPerView: 7 },
    1024: { slidesPerView: 6 },
    880: { slidesPerView: 5 },
    768: { slidesPerView: 4 },
    550: { slidesPerView: 2 },
    0: { slidesPerView: 2 },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
