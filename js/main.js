document.addEventListener("DOMContentLoaded", function () {
  var mixer = mixitup(".spec__content");
  mixer.filter(".category-el");

  // burger

  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find(".burger-menu_button", ".burger-menu_lines");
    let lines = menu.find(".burger-menu_lines");
    let links = menu.find(".burger-menu_link");
    let overlay = menu.find(".burger-menu_overlay");

    button.on("click", (e) => {
      e.preventDefault();
      toggleMenu();

      lines.toggleClass("burger-menu-write");
      $("body").toggleClass("overflow");
    });

    links.on("click", () => {
      toggleMenu();
    });
    overlay.on("click", () => toggleMenu());

    function toggleMenu() {
      menu.toggleClass("burger-menu_active");
    }
  }

  burgerMenu(".burger-menu");

  AOS.init();

  Fancybox.bind([{ src: "#dialog-content", type: "inline" }]);

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

  Fancybox.bind("[data-fancybox]", {});

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
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

  new Vivus("line", { type: "oneByOne", duration: 200, inViewport: true });

  new Vivus("gif", { type: "oneByOne", duration: 200, inViewport: true });
});
