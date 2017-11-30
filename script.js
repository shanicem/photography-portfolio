$(document).ready(function(){
  var scrollLink = $('.scroll');
  var headerHeight = $('body').find('.navbar').outerHeight();

  // slow scroll to clicked link
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - headerHeight
    }, 1000);
  });

  $(window).scroll(function() {
    var scrollbar = $(this).scrollTop();

    // update active link in menu
    scrollLink.each(function() {
      var offset = $(this.hash).offset().top - 200;

      if (offset <= scrollbar) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })
  });

  $('.img-container').hover(function() {
    $(this).toggleClass('vignette');
  });

    $('.img-container').click(function() {
      var src = $(this).find('.photo').attr('src');
      $('#modal-img').attr('src', src);
      $('#popup-modal').modal('show');
    });
  
})

