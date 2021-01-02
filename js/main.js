(function ($) {
"use strict";

// preloader
$(window).load(function() {
	$("#loading").delay(4000).fadeOut(1000);
	$("#loading-center").click(function() {
	$("#loading").fadeOut(1000);
	})
  })

// Active WOW js
new WOW().init();

// meanmenu active
jQuery('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
  });

// Data-background
 $("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  })

// sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
	  $("#header-sticky").removeClass("sticky");
	} else {
	  $("#header-sticky").addClass("sticky");
	}
  });

// Show or hide the sticky footer button
$(window).on('scroll', function(event) {
	if($(this).scrollTop() > 600){
		$('#scroll').fadeIn(200)
	} else{
		$('#scroll').fadeOut(200)
	}
  });


//Animate the scroll to Top
$('#scroll').on('click', function(event) {
	event.preventDefault();
	
	$('html, body').animate({
		scrollTop: 0,
	}, 1500);
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
  currentClass: 'active',
  scrollOffset: top_offset,
});

// counterUp
$('.counter').counterUp({
	delay: 10,
	time: 2000
  });

// niceSelect
  $('select').niceSelect(); 

// Slider active
  function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function(e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function() {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function() {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// Testimonial active
$('.testimonial-active').slick({
	dots: true,
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 3000,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });
  

// Brand active
$('.brand-active').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	speed: 3000,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
		  slidesToShow: 5,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 4,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  }
	]
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});

// filter items on button click
$('.portfolio-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});	


//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



})(jQuery);	