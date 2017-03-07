$(document).ready(function() {

    // Prevent slider from loading before JS
	$('#slider').removeClass('hide');

    function setSliderTextWidth() {
		var w = $(window).width();
		console.log(w);
		if(w < 767) {
	        $('.slider-text').width(w);
		} else {
	        $('.slider-text').width(300);		
		}	    	
    }


    // SLIDER FUNCTIONALITY
    var CHANGE_TIME = 4000,
        TRANSITION_SPEED = 400,
        sliderItems = $('#slider').children('li'),
        sliderLength = sliderItems.length,
        current = -1;

    function sliderOn() {

	    if(current == -1) {
	    	sliderItems.fadeOut(1);
	    	sliderItems.eq(0).fadeIn(TRANSITION_SPEED);
	    	current = 0; 
	    } else {
	    	var i = (current < sliderLength - 1) ? (current + 1) : 0;

	    	sliderItems.fadeOut(TRANSITION_SPEED)
	    	    .eq(i).fadeIn(TRANSITION_SPEED);

	        current = i; 	    	
	    }

        setTimeout(function() {
        	sliderOn();
        }, CHANGE_TIME)
    } 
    // END SLIDER FUNCTIONALITY


	$(window).resize(function(){
	    setSliderTextWidth();
	});

	sliderOn();
	setSliderTextWidth();

});
