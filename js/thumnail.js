window.addEventListener("load", () => {
  // 이미지 슬라이드
  const thumbSw = new Swiper(".thumnail", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".thumb-swiper-pagination",
      clickable: true,
    },
  });
});
