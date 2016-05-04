$(function(){

	$('#coolMenu').find('> li').hover(function(){
		$(this).find('ul')
		.removeClass('noJS')
		.stop(true, true).slideToggle('fast');
	});
	
});
$(document).ready(function() {
	$("#slideshow").css("overflow", "hidden");
	$("#slideshow-nav").css("visibility", "visible");
	$("#slideshow-nav a[href=#news1]").addClass("active");

	/*$("#slideshow-nav").localScroll({
  		target:'#slideshow', axis: 'x'
	});*/

    var width1=475*$('#slideshow ul li').size();
    $('#slideshow ul').css('width',width1);

	
	$("#slideshow-nav a").click(function(){
		$("#slideshow-nav a").removeClass("active");
		$(this).addClass("active");
		var left=(parseInt($(this).attr('class').substring(5))-1)*475;
		$('.slideshow_ing #slideshow ul').animate({left:-left},800);
        $('.slideshow_arab #slideshow ul').animate({left:+left},800);
	});
	
	
	/*-----------------------------------*/
    $("#gallery").css("overflow", "hidden");
    $("#gallery-nav").css("visibility", "visible");
    $("#gallery-nav a.gnav_1").addClass("active");


    var width=400*$('#gallery ul li').size();
    $('#gallery ul').css('width',width);
	
    /*$("#gallery-nav").localScroll({
        target:'#gallery', axis: 'x'
    });*/

    $("#gallery-nav a").click(function(){
        $("#gallery-nav a").removeClass("active");
        $(this).addClass("active");
        var left=(parseInt($(this).attr('class').substring(5))-1)*400;
		$('.gellery_ing #gallery ul').animate({left:-left},800);
        $('.gellery_arab #gallery ul').animate({left:left},800);
    });

	
});