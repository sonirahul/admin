$(document).on("click", ".flik-timeline-10 .show-title", function () {
    $(".flik-timeline-10 li").removeClass("active");
    $(this).parents("li").addClass("active")
});

$(function(){
    flikScrollEffect();

    $('.flik-slider-container .flik-slider').bxSlider();
    $('.flik-thumbnails-slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        image: {
            titleSrc: 'title'
        },
        gallery: {
            enabled: true,
            preload: [0, 1],
            navigateByImgClick: true
        }
    });
	
    $("#flik-timeline-overscroll").overscroll({ direction: 'horizontal' });
	
	
	_width=0;
	$('.flik-timeline-7 .flik-timeline-item').each(function(){
		_width+=$(this).width()+20;
	});
	$('.flik-timeline-7-bar').css('width',_width+60);
	$('.flik-timeline-10 .show-title:first').click();
	
});


function flikScrollEffect() {
    _selector=$('.flik-timeline');
    _selector.children('li').each(function () {
        _element = $(this);
        if (_element.offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            _element.addClass('is-hidden');
        }
    });
    _anim = _selector.data('scroll-effect');
    $(window).on('scroll', function () {
        _selector.children('li').each(function () {
            if ($(this).offset().top <= ($(window).scrollTop() + $(window).height() * 0.75) && $(this).hasClass('is-hidden')) {
                $(this).removeClass('is-hidden').addClass(_anim);
            }
        });
    });
}


