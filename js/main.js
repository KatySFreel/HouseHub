// scroll
// let prevScrollpos = window.pageYOffset;
// let header = document.querySelector("header");
// window.onscroll = function () {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     header.style.top = "0";
//     header.classList.toggle("shadow");
//   } else {
//     header.style.top = "-210px";
//     header.classList.toggle("shadow");
//   }
//   prevScrollpos = currentScrollPos;
// };

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

let btn = document.querySelector(".offer__btn");

btn.addEventListener("click", function () {
  Fancybox.show([{ src: "#dialog-content", type: "inline" }]);
});

// location
// Получаем нужный элемент
var element = document.querySelector("#location");


function visibleCircle(index, maxindex, elem) {
  if (index < maxindex) {
      elem[index].style.opacity = "1";
      index +=1;
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      return setTimeout(() => visibleCircle(index++,maxindex,elem), getRandomArbitrary(20,70))
  }

  return 
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


Fancybox.bind('[data-fancybox]', {
  // Custom options
});    


$('.reviews__menu').slick({
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

const faqHeaders = document.querySelectorAll('.ques__content');
const faqContents = document.querySelectorAll('.ques__answer');

gsap.set(faqContents,{height:0});
gsap.set(faqContents[0],{maxHeight: 500});
faqHeaders[0].classList.add('is-active')
gsap.to(faqHeaders[0],{opacity:1}); //1 авктивный элемент
gsap.to(faqContents[0],{height: 'auto'}); //1 авктивный элемент

faqHeaders.forEach((faqHeader)=>{
	faqHeader.addEventListener('click',function(){
		let faqContent = faqHeader.nextElementSibling;
		if(faqHeader.classList.contains('is-active')){
      gsap.to(faqContent,{height:0});
      gsap.to(faqContent,{opacity:0});
			faqHeader.classList.remove('is-active');
		}else{
			const activeHeader = document.querySelector('.ques__content.is-active');
      faqContent.style.opacity = '1';
			let delay = 0;
			if(activeHeader) {
				gsap.to(activeHeader.nextElementSibling,{height:0});
				activeHeader.classList.remove('is-active');
        faqContent.style.opacity = '1';
				delay= .5;
			}
			gsap.timeline()
			.to(faqContent,{maxHeight:'500',height:'auto', delay:delay})
			.add(()=>{
				faqHeader.classList.add('is-active')},'-=.5')
		}
	});
});


new Vivus("my-div", {
  duration: 300,
  type: "oneByOne",
  inViewport: true,
  file: "../img/noh/wires.svg",
});


let line = new Vivus("line", {
  type: "oneByOne",
  duration: 200,
  inViewport: true,
});