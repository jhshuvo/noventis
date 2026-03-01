(function($){
    "use strict";


//========== HEADER ACTIVE STRATS ============= //
  var windowOn = $(window);
  windowOn.on('scroll', function () {
    var scroll = windowOn.scrollTop();
    if (scroll < 100) {
      $("#vl-header-sticky").removeClass("header-sticky");
    } else {
      $("#vl-header-sticky").addClass("header-sticky");
    }
  });
  
//========== HEADER ACTIVE ENDS ============= //

//========== MOBILE MENU STARTS ============= //
var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
var vlSideMenu = $('.vl-offcanvas-menu nav');
vlSideMenu.append(vlMenuWrap);
if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length != 0) {
  $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
}

var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
$(sideMenuList).on('click', function (e) {
  console.log(e);
  e.preventDefault();
  if (!($(this).parent().hasClass('active'))) {
    $(this).parent().addClass('active');
    $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
  } else {
    $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
    $(this).parent().removeClass('active');
  }
});


$(".vl-offcanvas-toggle").on('click',function(){
$(".vl-offcanvas").addClass("vl-offcanvas-open");
$(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
});

$(".vl-offcanvas-close-toggle,.vl-offcanvas-overlay").on('click', function(){
$(".vl-offcanvas").removeClass("vl-offcanvas-open");
$(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
});

//========== MOBILE MENU ENDS ============= //

	/* ================================
        Mouse Cursor Animation Js Start
    ================================ */
	if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

//========== SIDEBAR/SEARCH AREA ============= //
$(".header-search-btn").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").addClass("open");
  $('.header-search-form-wrapper input[type="search"]').focus();
  $('.body-overlay').addClass('active');
});
$(".tx-search-close").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").removeClass("open");
  $("body").removeClass("active");
  $('.body-overlay').removeClass('active');
});

$('#mobile-menu-active').metisMenu();
  $('#mobile-menu-active .dropdown > a').on('click', function (e) {
  e.preventDefault();
  });
  $(".hamburger_menu").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").toggleClass("show");
  $("body").addClass("on-side");
  $('.body-overlay').addClass('active');
  $(this).addClass('active');
  });
  $(".close-mobile-menu > a").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").removeClass("show");
  $("body").removeClass("on-side");
  $('.body-overlay').removeClass('active');
  $('.hamburger_menu').removeClass('active');
  });
//========== SIDEBAR/SEARCH AREA ============= //

//========== PAGE PROGRESS STARTS ============= // 
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition =
  "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS STARTS ============= // 

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup_youtube").length > 0) {
    $(".popup_youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== Parallaxie ============= //
var $window = $(window);
var $parallaxie = $('.jarallax');

if ($parallaxie.length && ($window.width() > 991)) {
    if ($window.width() > 768) {
        $parallaxie.parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }
}


//========== TESTIMONIAL AREA ============= //

// testimonial //
    $(".testimonial-slider-boxarea").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $(".prev-btn"),
      nextArrow: $(".next-btn"),
      fade: false,
      loop: true,
      autoplay:true,
      autoplaySpeed:2000,
      speed: 1500,
      dots:true,
	  vertical:true,
    });

	$(".testimonial_4_slider_boxarea").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $(".prev-btn_4"),
		nextArrow: $(".next-btn_4"),
		fade: false,
		loop: true,
		autoplay:true,
		autoplaySpeed:2000,
		speed: 1500,
		dots:false,
		vertical:true,
    });

	$(".blog_h2_slide_boxarea").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $(".prev_btn-blog"),
      nextArrow: $(".next_btn-blog"),
      fade: false,
      loop: true,
      autoplay:true,
      autoplaySpeed:2000,
      speed: 1500,
      dots:false,
	  vertical:false,
	  responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				infinite: true,
			}
			},
			{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
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

	$(".project_2_slider_area").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $(".prev_btn-projects"),
      nextArrow: $(".next_btn-projects"),
      fade: false,
      loop: true,
      autoplay:true,
      autoplaySpeed:2000,
      speed: 1500,
      dots:false,
	  vertical:false,
	  responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				infinite: true,
			}
			},
			{
			breakpoint: 769,
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
  
	$(".sky-img-slick-slider").slick({
     autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    arrows: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true
  });

  $(".brand_Logos_slider").slick({
     autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    arrows: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
	slidesToShow: 5,
      slidesToScroll: 1,
	responsive: [
			{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true,
			}
			},
			{
			breakpoint: 769,
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

})(jQuery);


  // SLIDER //
var rev = $('.rev_slider');
rev.on('init', function(event, slick, currentSlide) {
  var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    prev = cur.prev();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  cur.removeClass('slick-snext').removeClass('slick-sprev');
  slick.$prev = prev;
  slick.$next = next;
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  var
    cur = $(slick.$slides[nextSlide]);

  slick.$prev.removeClass('slick-sprev');
  slick.$next.removeClass('slick-snext');
  next = cur.next(),
    prev = cur.prev();
  prev.prev();
  prev.next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
  speed: 1000,
  arrows: false,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  centerMode: true,
  slidesPerRow: 5,
  slidesToShow: 5,
  slidesToScroll: 5,
  centerPadding: '0',
  swipe: true,
  autoplaySpeed:2500,
  speed:1500,
  autoplay:false,
  customPaging: function(slider, i) {
    return '';
  },

});

/*----------------------------------------*/
/*  01.text scroll animation
/*----------------------------------------*/
function initHeadingAnimation() {
		
		if($('.text-effect').length) {
			var textheading = $(".text-effect");

			if(textheading.length === 0) return; gsap.registerPlugin(SplitText); textheading.each(function(index, el) {
				
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
				
				if( $(el).hasClass('text-effect') ){
					gsap.set(el.split.chars, {
						opacity: .3,
						x: "-7",
					});
				}
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 92%",
						end: "top 60%",
						markers: false,
						scrub: 1,
					},

					x: "0",
					y: "0",
					opacity: 1,
					duration: .7,
					stagger: 0.2,
				});
				
			});
		}
		
		if ($('.text-anime-style-1').length) {
			let staggerAmount 	= 0.05,
				translateXValue = 0,
				delayValue 		= 0.5,
			   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.words, {
					duration: 1,
					delay: delayValue,
					x: 20,
					autoAlpha: 0,
					stagger: staggerAmount,
					scrollTrigger: { trigger: element, start: "top 85%" },
					});
			});		
		}
		
		if ($('.text-anime-style-2').length) {				
			let	 staggerAmount 		= 0.03,
				 translateXValue	= 20,
				 delayValue 		= 0.1,
				 easeType 			= "power2.out",
				 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
			
			animatedTextElements.forEach((element) => {
				let animationSplitText = new SplitText(element, { type: "chars, words" });
					gsap.from(animationSplitText.chars, {
						duration: 1,
						delay: delayValue,
						x: translateXValue,
						autoAlpha: 0,
						stagger: staggerAmount,
						ease: easeType,
						scrollTrigger: { trigger: element, start: "top 85%"},
					});
			});		
		}
		
		if ($('.text-anime-style-3').length) {		
			let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
			
			 animatedTextElements.forEach((element) => {
				//Reset if needed
				if (element.animation) {
					element.animation.progress(1).kill();
					element.split.revert();
				}

				element.split = new SplitText(element, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});
				gsap.set(element, { perspective: 400 });

				gsap.set(element.split.chars, {
					opacity: 0,
					x: "50",
				});

				element.animation = gsap.to(element.split.chars, {
					scrollTrigger: { trigger: element,	start: "top 90%" },
					x: "0",
					y: "0",
					rotateX: "0",
					opacity: 1,
					duration: 1,
					ease: Back.easeOut,
					stagger: 0.02,
				});
			});		
		}
	}
	
	if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            initHeadingAnimation();
        });
    } else {
        window.addEventListener("load", initHeadingAnimation);
  }



	//image cliping effect
	document.addEventListener("DOMContentLoaded", () => {

		const initialClipPaths = [
			"polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
			"polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
			"polygon(65.66% 0%, 66.66% 0%, 66.66% 0%, 66.66% 0%)",
			"polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
			"polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
			"polygon(65.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%, 66.66% 33.33%)",
			"polygon(0% 66.66%, 0% 66.66%, 0% 66.66%, 0% 66.66%)",
			"polygon(33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%, 33.33% 66.66%)",
			"polygon(65.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%, 66.66% 66.66%)"
		];

		const finalClipPaths = [
			"polygon(0% 0%, 34.33% 0%, 34.33% 34.33%, 0% 34.33%)",
			"polygon(32.33% 0%, 66.66% 0%, 66.66% 33.33%, 33.33% 34.33%)",
			"polygon(65.66% 0%, 100% 0%, 100% 33.33%, 65.66% 34.33%)",
			"polygon(0% 33.33%, 33.33% 33.33%, 33.33% 66.66%, 0% 66.66%)",
			"polygon(30.33% 33.33%, 66.66% 33.33%, 66.66% 66.66%, 33.33% 66.66%)",
			"polygon(65.66% 33.33%, 100% 32.33%, 100% 66.66%, 65.66% 66.66%)",
			"polygon(0% 65.66%, 33.33% 66.66%, 33.33% 100%, 0% 100%)",
			"polygon(30.33% 66.66%, 66.66% 65.66%, 66.66% 100%, 33.33% 100%)",
			"polygon(65.66% 66.66%, 100% 65.66%, 100% 100%, 65.66% 100%)"
		];

		// Create mask divs for each wrapper
		document.querySelectorAll(".vl-clip-anim").forEach(wrapper => {
			const img = wrapper.querySelector(".vl-anim-img[data-animate='true']");
			if (!img) return;
			const url = img.src;

			// Remove old masks if any (reuse safe)
			wrapper.querySelectorAll(".mask").forEach(m => m.remove());

			for (let i = 0; i < 9; i++) {
				const mask = document.createElement("div");
				mask.className = `mask mask-${i + 1}`;
				Object.assign(mask.style, {
					backgroundImage: `url(${url})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					position: "absolute",
					inset: "0"
				});
				wrapper.appendChild(mask);
			}
		});

		// Animate masks
		gsap.utils.toArray(".vl-clip-anim").forEach(wrapper => {
			const masks = wrapper.querySelectorAll(".mask");
			if (!masks.length) return;

			gsap.set(masks, { clipPath: (i) => initialClipPaths[i] });

			const order = [
				[".mask-1"],
				[".mask-2", ".mask-4"],
				[".mask-3", ".mask-5", ".mask-7"],
				[".mask-6", ".mask-8"],
				[".mask-9"]
			];

			const tl = gsap.timeline({
				scrollTrigger: { trigger: wrapper, start: "top 75%" }
			});

			order.forEach((targets, i) => {
				const validTargets = targets
					.map(c => wrapper.querySelector(c))
					.filter(el => el); // filter out nulls

				if (validTargets.length) {
					tl.to(validTargets, {
						clipPath: (j, el) => finalClipPaths[Array.from(masks).indexOf(el)],
						duration: 1,
						ease: "power4.out",
						stagger: 0.1
					}, i * 0.125);
				}
			});
		});
	});


	function initRevealAnimation() {
  if ($('.reveal').length) {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "play none none none",
        }
      });
      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, { xPercent: -100, ease: Power2.out });
      tl.from(image, 1.5, { xPercent: 100, scale: 1.3, delay: -1.5, ease: Power2.out });
    });
  }
}

initRevealAnimation();

