$(document).ready(function() {

  // jQuery functions: (1) .click(), (2) .offset()
  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 300);
    return false;
  })
  
})
