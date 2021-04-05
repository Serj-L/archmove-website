@@include('burger.js')
@@include('scroll-up.js')
@@include('show-password.js')
@@include('modal.js')
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

  //search input
  const searchBtnOpen = document.querySelector(".header__search-sign-link--search");
  const searchBtnOpenIcon = document.querySelector(".search-icon");
  const searchBtnClose = document.querySelector(".header__search-sign-search-btn-close");
  const searchForm = document.querySelector(".header__search-sign-search-form");
  const searchFormInput = document.querySelector(".header__search-sign-search-input");

  const searchInputClose = () => {
    searchForm.classList.remove("active");
    searchBtnOpenIcon.classList.remove("active");
    searchFormInput.value = "";
};

if (searchForm) {

  searchBtnOpen.addEventListener("click", function (e) {
    searchForm.classList.toggle("active");
    searchBtnOpenIcon.classList.toggle("active");
    searchBtnOpen.blur();


    if (searchForm.classList.contains("active")) {

      searchBtnClose.addEventListener("click", function (e) {
        searchInputClose();
      });

      window.onscroll = function() {scrollUp()};
      function scrollUp() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          searchInputClose();
        }

      }

      document.body.addEventListener("click", function (event) {
        if (event.target.closest(".header__search-sign-search-form")) {
            return;
        }
        else if (event.target.closest(".header__search-sign-link--search")) {
          return;
        }
        else {
          searchInputClose();
        }
     });
    }
  });
}
//search input

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
// slider button remove class active
const sliderSamplesBtnNext = document.getElementById("samplesSliderBtnNext");
const sliderSamplesBtnPrev = document.getElementById("samplesSliderBtnPrev");

if (sliderSamplesBtnNext.classList.contains("active")) {
    sliderSamplesBtnNext.addEventListener("click", function (e) {
    sliderSamplesBtnNext.classList.remove("active");
  });
  sliderSamplesBtnPrev.addEventListener("click", function (e) {
    sliderSamplesBtnNext.classList.remove("active");
  });
}

//samples slider

//testimonials slider
  const swiperTestimonials = new Swiper('.testimonials__slider', {
    // parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,

    speed: 800,

    autoHeight: true,

    effect: "flip",

    flipEffect: {
      slideShadows: true,
      limitRotation: true
    },

    /* effect: "fade",
    fadeEffect: {
      crossFade: true
    }, */

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  });

// slider button remove class active
const sliderTestimonialsBtnNext = document.getElementById("testimonialsSliderBtnNext");
const sliderTestimonialsBtnPrev = document.getElementById("testimonialsSliderBtnPrev");

if (sliderTestimonialsBtnNext.classList.contains("active")) {
    sliderTestimonialsBtnNext.addEventListener("click", function (e) {
    sliderTestimonialsBtnNext.classList.remove("active");
  });
  sliderTestimonialsBtnPrev.addEventListener("click", function (e) {
    sliderTestimonialsBtnNext.classList.remove("active");
  });
}
//testimonials slider

//partners slider
const swiperPartners = new Swiper('.partners__slider', {
// parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

breakpoints: {

  320: {slidesPerView: 1},

  420: {slidesPerView: 2},

  750: {slidesPerView: 3},

  1170: {slidesPerView: 4},

},

spaceBetween: 20,

});
//partners slider
