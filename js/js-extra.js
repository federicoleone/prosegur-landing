    /* Visible el on screen*/
    $.fn.isInViewport = function() {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();

      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    $(window).on('resize scroll', function() {
      $('#carousel-mainbanner').each(function() {
        if ($(this).isInViewport()) {
            $(this).carousel('cycle');
        } else {
            $(this).carousel('pause');
        }
      });
    });



    $('.carousel').hover(function () { 
      $(this).carousel('pause') 
    }, function () { 
      $(this).carousel('cycle') 
    });

    $('.carousel input').click(function(){
      $(".carousel").carousel('pause');
      console.log('clicked')
    })