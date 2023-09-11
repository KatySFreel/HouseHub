document.addEventListener("DOMContentLoaded", function () {
  // aos start
  AOS.init();

  // burger

  const btnBurger = document.querySelector(".menu");
  const html = document.querySelector("html");
  const mobMenu = document.querySelector(".mobile-menu");
  const burgerWrap = document.querySelector(".burger");

  btnBurger.addEventListener("click", (e) => {
    btnBurger.classList.toggle("active");
    html.classList.toggle("overflow");
    mobMenu.classList.toggle("menu-active");
    burgerWrap.classList.toggle("burger-active");
  });

  // funsybox start

  Fancybox.bind([{ src: "#dialog-content", type: "inline" }]);
  Fancybox.bind("[data-fancybox]", {});

  // location
  // Получаем нужный элемент
  let element = document.querySelector("#location");

  function visibleCircle(index, maxindex, elem) {
    if (index < maxindex) {
      elem[index].style.opacity = "1";
      index += 1;
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      return setTimeout(
        () => visibleCircle(index++, maxindex, elem),
        getRandomArbitrary(20, 70),
      );
    }

    return;
  }

  locationStart = () => {
    let svgElement = document.querySelector("#locationImg");
    let circleElements = svgElement.querySelectorAll("circle");
    visibleCircle(0, circleElements.length, circleElements);
  };

  let Visible = function (target) {
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (
      targetPosition.bottom > windowPosition.top &&
      targetPosition.top < windowPosition.bottom &&
      targetPosition.right > windowPosition.left &&
      targetPosition.left < windowPosition.right
    ) {
      locationStart();
    } else {
    }
  };

  // Запускаем функцию при прокрутке страницы
  window.addEventListener("scroll", function () {
    Visible(element);
  });

  // А также запустим функцию сразу. А то вдруг, элемент изначально видно
  Visible(element);

  // slick-slider
  $(".reviews__menu").slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  let acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.classList.contains("active")) {
        panel.classList.remove("active");
      } else {
        panel.classList.add("active");
      }
    });
  }

  // scroll-btn
  let scrollTimer;
  const scrollBnt = document.querySelector(".scroll-btn");

  window.addEventListener("scroll", function () {
    clearTimeout(scrollTimer);
    if(pageYOffset > 700) {
      clearTimeout(scrollTimer);
      scrollBnt.classList.remove("active");
  
      scrollTimer = setTimeout(function () {
          scrollBnt.classList.add("active");
      }, 500);
    }


  });

  // vivus
  new Vivus(
    "technologies__img",
    {
      type: "oneByOne",
      duration: 200,
      inViewport: true,
    },
    function (obj) {
      obj.el.classList.add("finished");
    },
  );

  new Vivus(
    "structurally__gif",
    {
      type: "oneByOne",
      duration: 200,
      inViewport: true,
    },
    function (obj) {
      obj.el.classList.add("finished");
    },
  );

  // home
  const btns = document.querySelectorAll(".home__btns button");
  const housePaths = document.querySelectorAll(".house img");
  const houseWB = document.querySelector('.house img[data-path="wb"]');

  btns.forEach((btn) => {
    ["mouseenter", "touchstart"].forEach((evnt) => {
      btn.addEventListener(evnt, (e) => {
        const target = e.target;
        houseWB.style.zIndex = 1;
        houseWB.style.opacity = 1;

        activeBtn(target);

        showPath(target.dataset.path);
      });
    });
  });

  btns.forEach((btn) => {
    ["mouseleave", "touchend"].forEach((evnt) => {
      btn.addEventListener(evnt, () => {
        resetHouse();
      });
    });
  });

  const activeBtn = (targetBtn) => {
    btns.forEach((btn) => {
      if (btn === targetBtn) return;

      btn.classList.add("hide");
    });
  };

  const showPath = (pathName) => {
    housePaths.forEach((item) => {
      if (item.dataset.path == pathName) {
        item.style.zIndex = 2;
        item.style.opacity = 1;
      }
    });
  };

  const resetHouse = () => {
    houseWB.style.zIndex = 0;
    houseWB.style.opacity = 0;

    housePaths.forEach((path) => {
      if (path.dataset.path !== "colored" && path.dataset.path !== "wb") {
        path.style.zIndex = 0;
        path.style.opacity = 0;
      }
    });

    btns.forEach((btn) => {
      btn.classList.remove("hide");
    });
  };

  // mixitab
  let mixer = mixitup(".spec__content");
  mixer.filter(".category-el");
});
