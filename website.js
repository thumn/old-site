$(document).ready(function(){
  $('#link-max').click(function() {
      $('#photo-emily').css('display', 'none');
      $('#photo-max').css('display', 'block');
  });

  $('#link-emily').click(function() {
      $('#photo-max').css('display', 'none');
      $('#photo-emily').css('display', 'block');
  });
});
