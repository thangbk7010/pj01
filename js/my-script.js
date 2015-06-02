
(function($){
	$.fn.tabs = function(){
		var tabs = this;
		
		if(tabs.length == 0) return tabs;
		
		tabs.find('.tab-title a').click(function(event){
			event.preventDefault();
			var id = $(this).attr('rel');
			tabs.find('.tab-title .active').removeClass('active');
			tabs.find('.tab-content').hide().filter('#' + id).show();
			$(this).addClass('active');
		});
		
		tabs.find('.tab-content').hide().filter('#' + tabs.find('.tab-title .active').attr('rel')).show();
		
		return this;
	}
})(jQuery);


$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true,
		controls: false
	});
	
	$('.projectslider').bxSlider();
	
	$('.tabs').tabs();
	
	$("a.fancybox").fancybox({
		closeClick	: false
	});
	
	$(".open_ajax").fancybox();
	
	$('.tab-content > ul.list-inline li').click(function(){
		if($(this).find('ul').length != 0){
			$('.tab-content > ul.list-inline li').not(this).find('ul').slideUp();
			$(this).find('ul').slideToggle();
		}
	});
	
	$('.btn-toggle').click(function(){
		if($(window).width() < 768){
			$('ul.menu').slideToggle('slow');
		}
	});
	
	if($(window).width() <= 1110){
		$('.detail-container').width($(window).width() - 40);
	}
 });
 
 jQuery(window).resize(function(){
	if($(window).width() < 768){
		$('ul.menu').hide();
	}
	else{
		$('ul.menu').show();
	}
	
	if($(window).width() <= 1110){
		$('.detail-container').width($(window).width() - 100);
	}
	
 })
