@@include('burger.js')

@@include('swiper-bundle.min.js')

//check broswer webP support
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else{
        document.querySelector('body').classList.add('no-webp');
    }
 });
  //check broswer webP support

  //samples slider
const swiper = new Swiper('.samples__slider', {
  // parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev"
},

breakpoints: {

  320: {slidesPerView: 1, centeredSlides: true},

  650: {slidesPerView: 2, centeredSlides: false},

  750: {slidesPerView: 2.3},

  850: {slidesPerView: 2.4},

  1070: {slidesPerView: 2.8},

  1170: {slidesPerView: 3.2},

  1250: {slidesPerView: 3.4},

  1350: {slidesPerView: 3.7},

},

spaceBetween: 20,

});
//samples slider

// slider button remove class active
const sliderBtnNext = document.querySelector(".swiper-button-next");
const sliderBtnPrev = document.querySelector(".swiper-button-prev");

if (sliderBtnNext.classList.contains("active")) {
    sliderBtnNext.addEventListener("click", function (e) {
    sliderBtnNext.classList.remove("active");
  });
  sliderBtnPrev.addEventListener("click", function (e) {
    sliderBtnNext.classList.remove("active");
  });
}