/* ---------------------------------------

Name: Scandia Documentation
Version: 1.0
Author: ThemeHavens

=>  Table of Content  <=

1 - Adjust Loading Page
2 - Make Header takes the Full Height of the window
3 - Color Switcher && Changing Colors
4 - Sticky Menu
5 - Accordian Active Class
6 - Start Isotop Plugin in Portfolio Section
7 - Parallax Effect
8 - Start OwlCarousel Plugin in Testimonial Section 
9 - Wow Js Active Jquery
10 - Jquery Go Down Button
11 - Jquery Smooth Scroll
12 - Start EasyPieChart plugin
13 - jquery scroll spy
14 - Start numbers animate at fun-facts section 
15 - Launch To Top Button when scroll 
16 - Go To Top onclick on toTop Button

--------------------------------------- */

(function($) {

	"use strict";

	jQuery(document).ready(function(){

		
        /* ---------------------------------------------------
            4 - Sticky Menu
		----------------------------------------------------- */
        $(".header-area").sticky({topSpacing:0});

        
        /* ---------------------------------------------------
            11 - Jquery Smooth Scroll
		----------------------------------------------------- */
        $('li.smooth-menu > a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '76';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        });

        
        
        
        
        /* ---------------------------------------------------
            13 - jquery scroll spy
		----------------------------------------------------- */
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 94,
        }); 

        
        
        
	});
})(jQuery);