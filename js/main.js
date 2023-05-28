// scroll
let prevScrollpos = window.pageYOffset;
let header = document.querySelector("header");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    header.classList.toggle("shadow");
  } else {
    header.style.top = "-210px";
    header.classList.toggle("shadow");
  }
  prevScrollpos = currentScrollPos;
};

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

new Vivus("my-div", {
  duration: 300,
  type: "oneByOne",
  pathTimingFunction: Vivus.EASE,
  inViewport: true,
  file: "img/noh/wires.svg",
});

const line = new Vivus(
  'line',
  {
    type: 'oneByOne',
    duration: 200,
    inViewport: true,
    reverseStack: true
  }
);


AOS.init();


let btn = document.querySelector(".offer__btn");

btn.addEventListener("click", function () {
  Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
})
