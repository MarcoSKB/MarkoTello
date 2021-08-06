$(document).ready(function() {
  $('.mobile_menu').click(function(event) {
    $('.burger').toggleClass('active_menu');
    $('.navigation').toggleClass('active_menu');
    $('body').toggleClass('lock');
  });
});

window.addEventListener("resize", function(event) {
    if ($(window).width() > 768) {
      $('.burger').removeClass('active_menu');
      $('.navigation').removeClass('active_menu');
      $('body').removeClass('lock');
    }
});
