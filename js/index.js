$(document).ready(function () {
  var menu = $('#top-navbar');
  var origOffsetY = menu.offset().top;

  function scroll() {
    if ($(window).scrollTop() >= origOffsetY) {
      $(menu).addClass('sticky');
      $('.content').addClass('menu-padding');
      $('.social-buttons').addClass('sticky-buttons fadeInRight');
    } else {
      $(menu).removeClass('sticky');
      $('.content').removeClass('menu-padding');
      $('.social-buttons').removeClass('sticky-buttons fadeInRight');
    }
  }
  document.onscroll = scroll;
});