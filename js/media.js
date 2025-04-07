window.addEventListener("load", () => {
  const mediaSw = new Swiper("#media .card-wrap", {
    pagination: {
      el: "#media .swiper-pagination",
      // type: "progressbar",
      clickable: true,
    },
    navigation: {
      nextEl: "#media .swiper-button-next",
      prevEl: "#media .swiper-button-prev",
    },
  });
});
