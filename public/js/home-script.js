
$(document).ready(function() {
	"use strict";
	$(".menuBtn").click(function() {
		$(this).toggleClass("menuBtnActive");
		$(".headerContainer").fadeToggle(400);
	});
	$('#demo').carousel({
	  interval: 5000
	});
	
	$(".scroll").niceScroll({
		cursorcolor: "#000",
		background:"#ccc",
		cursorborder: false,
		autohidemode: false
	});
	$('#ascrail2000').show();
	
	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 100) {
			$('.button-top').animate({
				opacity:1
			},0);
		}
		else {
			$('.button-top').animate({
				opacity:0
			},0);
		}
	});
	$(".button-top").click(function(){
	   $("html,body").animate({scrollTop:'0px'},500);
	});
});

$(window).scroll(function(){
	"use strict";
	
	var wScroll = $(this).scrollTop();
	//var $ht = $(".banner").innerHeight() / 2;
	
	if (wScroll >= 150) {
		$(".header, .menuBtn").addClass("fixed");
	} else {
		$(".header, .menuBtn").removeClass("fixed");
	}
	
	if(wScroll > $('#section1').offset().top - ($(window).height() / 1.5)) {
		$('#section1 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section1 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section2').offset().top - ($(window).height() / 1.5)) {
		$('#section2 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section2 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section3').offset().top - ($(window).height() / 1.5)) {
		$('#section3 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section3 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section4').offset().top - ($(window).height() / 1.5)) {
		$('#section4 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section4 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section5').offset().top - ($(window).height() / 1.5)) {
		$('#section5 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section5 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section6').offset().top - ($(window).height() / 1.5)) {
		$('#section6 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section6 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section7').offset().top - ($(window).height() / 1.5)) {
		$('#section7 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section7 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section8').offset().top - ($(window).height() / 1.5)) {
		$('#section8 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section8 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
	
	if(wScroll > $('#section9').offset().top - ($(window).height() / 1.5)) {
		$('#section9 .bottomTranslate').each(function(i){
			setTimeout(function(){
				$('#section9 .bottomTranslate').eq(i).addClass('doneTranslate');
			}, 150 * (i+1));
		});
	}
});