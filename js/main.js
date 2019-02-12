/* Header */
$(function(){
	nav_scroll_bg();

	$(window).scroll(function(){
		nav_scroll_bg();
	});	
	
});

function nav_scroll_bg(){
    if ($(window).scrollTop() > 50) {
       $('.navbar').addClass('nav-landing-scroll-bg');
    } else {
       $('.navbar').removeClass('nav-landing-scroll-bg');
    }		
}

/* Silder */
$(document).ready(function () {
    var nextH;
    $('.carousel').on('slide.bs.carousel', function (e) {
        nextH = $(e.relatedTarget).height();
        $('.carousel-inner').animate({ height: nextH }, 500);
    });

    var currentH;
    $(window).on('resize', function(){
        currentH = $('.carousel-item.active').height();
        $('.carousel-inner').height(currentH);
    });
});


/* AOS */
AOS.init();