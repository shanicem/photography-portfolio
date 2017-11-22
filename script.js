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
      var offset = $(this.hash).offset().top - 125;

      if (offset <= scrollbar) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    })
  });
})

