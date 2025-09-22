const swiperConfig = {
  loop: true,
  speed: 600,
  autoplay: {
    delay: 5000
  },
  slidesPerView: "auto",
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
};

// 如果使用模块系统，可以导出配置
if (typeof module !== 'undefined' && module.exports) {
  module.exports = swiperConfig;
}