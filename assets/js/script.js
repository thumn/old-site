$(document).ready(function() {
  $(".project-item").hover(function () {
    $(this).find('.image-text').fadeIn(100);
},
function () {
    $(this).find('.image-text').fadeOut(100);
});​

  })
})
