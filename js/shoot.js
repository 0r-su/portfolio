window.addEventListener("load", () => {
  const shootSw = new Swiper("#shoot .card-wrap", {
    pagination: {
      el: "#shoot .swiper-pagination",
      // type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: "#shoot .swiper-button-next",
      prevEl: "#shoot .swiper-button-prev",
    },
  });
});
