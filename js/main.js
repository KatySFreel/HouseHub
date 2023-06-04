document.addEventListener("DOMContentLoaded", function () {
  // burger
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger__button", ".burger__lines");
    let lines = menu.find(".burger__lines");
    let links = menu.find(".burger_link");
    let overlay = menu.find(".burger_overlay");

    button.on("click", (e) => {
      e.preventDefault();
      toggleMenu();

      lines.toggleClass("burger-write");
      $("html").toggleClass("overflow");
    });

    links.on("click", () => {
      toggleMenu();
    });
    overlay.on("click", () => toggleMenu());

    function toggleMenu() {
      menu.toggleClass("burger-active");
    }
  }

  burgerMenu(".burger");

  // menu
  $(".array").on("click", () => {
    $(".mobile-menu").toggleClass("menu-active");
  });

  // funsybox start

  Fancybox.bind([{ src: "#dialog-content", type: "inline" }]);
  Fancybox.bind("[data-fancybox]", {});

  // location
  // Получаем нужный элемент
  var element = document.querySelector("#location");

  function visibleCircle(index, maxindex, elem) {
    if (index < maxindex) {
      elem[index].style.opacity = "1";
      index += 1;
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      return setTimeout(
        () => visibleCircle(index++, maxindex, elem),
        getRandomArbitrary(20, 70)
      );
    }

    return;
  }

  locationStart = () => {
    var svgElement = document.querySelector("#locationImg");
    var circleElements = svgElement.querySelectorAll("circle");
    visibleCircle(0, circleElements.length, circleElements);
  };

  var Visible = function (target) {
    var targetPosition = {
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

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

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
    }
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
    }
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
        console.log(path.dataset.path);
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

  // aos start
  AOS.init();
});
