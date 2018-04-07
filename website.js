$(window).load(function(){
   $('.loader').fadeOut(1000);
});

$(document).ready(function(){
  $('#link-max').click(function() {
      $('#photo-emily').fadeOut(1000);
      $('#photo-emily').css('display', 'none');
      $('#photo-max').fadeIn(1000);
      $('#photo-max').css('display', 'block');
  });

  $('#link-emily').click(function() {
      $('#photo-max').fadeOut(1000);
      $('#photo-max').css('display', 'none');
      $('#photo-emily').fadeIn(1000);
      $('#photo-emily').css('display', 'block');
  });
});
