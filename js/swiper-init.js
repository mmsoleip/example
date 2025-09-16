/**
* Swiper Initialization Script
*/

document.addEventListener('DOMContentLoaded', function() {
  const swiperConfig = {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 1
      }
    }
  };
  
  // Initialize Swiper
  const swiper = new Swiper('.init-swiper', swiperConfig);
});