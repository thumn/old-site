$(document).ready(function() {

  // jQuery functions: (1) .click(), (2) .offset(), (3) .attr()
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 300);
    return false;
  });

// jQuery functions: (4) .hover() (5) .css()
  $('a').hover(function() {
    $('.sidebar-item', this).css('color', 'teal');
  }).mouseout(function() {
    $('.sidebar-item', this).css('color', 'white');
  });

  $('#name-text').hover(function() {
    $('#title-subtext').fadeIn('slow');
  });


})
