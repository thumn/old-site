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

  // jQuery functions: (6) .fadeIn() (7) .fadeOut()

  $(window).scroll(function() {
    if ($(this).scrollTop() > 2500) {
        $('#up-arrow').fadeIn('slow');
    } else {
        $('#up-arrow').fadeOut('slow');
    }
  });

  $("#up-arrow").click(function () {
    $("html, body").animate({scrollTop: 0}, 800);
    return false;
  });

})
