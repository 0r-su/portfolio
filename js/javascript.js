window.addEventListener("load", () => {
  // 해당 menu 누르면 관련 페이지 나오게하기
  // #media
  const mediaItems = document.querySelectorAll("#media .media-navi > li");
  // console.log(mediaItems);
  mediaItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      mediaItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      // document.querySelector("#media .media-navi > li.active")?.classList.remove("active");

      // item.parentElement.classList.add("active");
    });
  });

  // shoot
  const shootItems = document.querySelectorAll("#shoot .media-navi > li");
  // console.log(naviItems);
  shootItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      shootItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
      // document.querySelector("#media .media-navi > li.active")?.classList.remove("active");

      // item.parentElement.classList.add("active");
    });
  });
  //영상 멈추고 재생하기
  const articles = document.querySelectorAll(".swiper-slide");
  console.log(articles);
  articles.forEach((article) => {
    article.addEventListener("mouseenter", (e) => {
      e.currentTarget.querySelector("video").play();
    });
    article.addEventListener("mouseleave", (e) => {
      e.currentTarget.querySelector("video").pause();
    });
  });

  // 로고 누르면 새로고침
  document.getElementById("logo").addEventListener("click", function () {
    location.reload(); // 페이지 새로고침
  });

  // 자기소개
  // const introduce = document.querySelector(".header-navi ul li:nth-of-type(1)");
  // console.log(introduce);
  // const introduceText = document.querySelector("#introduce");
  // console.log(introduceText);

  // introduce.addEventListener("mouseover", () => {
  //   introduceText.style.visibility = "visible"; // 보이도록 변경
  //   introduceText.style.opacity = "1"; // 서서히 나타남
  //   introduceText.style.zIndex = "2";
  // });

  // introduce.addEventListener("mouseout", () => {
  //   introduceText.style.opacity = "0"; // 서서히 사라짐
  //   setTimeout(() => {
  //     introduceText.style.visibility = "hidden"; // 완전히 사라진 후 숨김
  //   }, 500); // 트랜지션 속도와 동일하게 설정
  // });

  const introduce = document.querySelector(".header-navi ul li:nth-of-type(1)");
  const introduceText = document.querySelector("#introduce");

  const showIntroduce = () => {
    introduceText.style.visibility = "visible";
    introduceText.style.opacity = "1";
    introduceText.style.zIndex = "3";
  };

  const hideIntroduce = () => {
    setTimeout(() => {
      // introduceText에 마우스가 없을 때만 숨김 처리
      if (!introduceText.matches(":hover") && !introduce.matches(":hover")) {
        introduceText.style.opacity = "0";
        setTimeout(() => {
          introduceText.style.visibility = "hidden";
        }, 500);
      }
    }, 100);
  };

  introduce.addEventListener("mouseover", showIntroduce);
  introduceText.addEventListener("mouseover", showIntroduce);

  introduce.addEventListener("mouseout", hideIntroduce);
  introduceText.addEventListener("mouseout", hideIntroduce);

  //hover 하면 선 생기고 click 하면 유지
  const listItems = document.querySelectorAll(".media-navi > li > span");
  console.log(listItems);
  // 각 항목에 클릭 이벤트를 추가
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      // 클릭된 항목에 active 클래스 추가
      item.classList.toggle("active");

      // 다른 항목의 active 클래스 제거
      listItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
    });
  });

  // 버튼 클릭하면 더보기 펼쳐지기
  // document.getElementById("toggleButton").addEventListener("click", function () {
  //   document.querySelector(".project-wrap").classList.toggle("show-more");
  // });

  //
  const container = document.querySelector(".project-wrap");
  const button = document.getElementById("toggleButton");

  button.addEventListener("click", function () {
    if (container.style.height === "380px" || container.style.height === "") {
      container.style.height = container.scrollHeight + "px"; // 실제 높이만큼 확장
    } else {
      // container.style.height = "380px"; // 다시 원래 크기로 축소
    }
  });
});
