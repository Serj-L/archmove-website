// scroll up
var scrbtn = $('.scroll-up-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    scrbtn.addClass('active');
  } else {
    scrbtn.removeClass('active');
  }
});

scrbtn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});
// scroll up