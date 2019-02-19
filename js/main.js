$(function(){

    /* Carousel Stop Cycle on click Mobile*/
    $('.carousel').on('tap','input', function(){
      $('.carousel').carousel('pause');
      console.log('stop please')      
    });

    $('.carousel').hover(function () { 
      $(this).carousel('pause') 
    }, function () { 
      $(this).carousel('cycle') 
    });    


    /* Header add bg black */
    function nav_scroll_bg(){
        if ($(window).scrollTop() > 30) {
           $('.navbar').addClass('nav-landing-scroll-bg');
        } else {
           $('.navbar').removeClass('nav-landing-scroll-bg');
        }       
    }

	nav_scroll_bg();

	$(window).scroll(function(){
		nav_scroll_bg();
	});	
	

    /* Silder */
    var nextH;
    $('.carousel').on('slide.bs.carousel', function (e) {
        nextH = $(e.relatedTarget).height();
        $('.carousel-inner').animate({ height: nextH }, 500);
        setTimeout(function(){
            $('.carousel-inner').height('');
        }, 1000);
    });

    var currentH;
    $(window).on('resize', function(){
        currentH = $('.carousel-item.active').height();
        $('.carousel-inner').height(currentH);
        setTimeout(function(){
            $('.carousel-inner').height('');
        }, 1000);
    });


    /* AOS */
    AOS.init();





});

/* Validation */
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();