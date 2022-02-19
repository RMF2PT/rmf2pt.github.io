// This function sticks the navbar on top 
// and animates the social buttons 
// when the initial viewport is scrolled down
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

// Calculates the current year for the footer
var y = new Date().getFullYear(); 
document.getElementById('currentYear').innerHTML = y;

// Gets the info for the modal to show the demo from the selected project
var demoModal = document.getElementById('demoModal');
demoModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var demoURL = button.getAttribute('data-bs-url');
  var demoName = button.getAttribute('data-bs-name');
  // Update the modal's content.
  var modalTitle = demoModal.querySelector('.modal-title');
  var modalSource = document.getElementById('demoIframe');

  modalTitle.textContent = demoName;
  modalSource.src = demoURL;
})