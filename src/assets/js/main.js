(function ($) {
	"use strict";
	
	/*----------------------------------------*/
	/*------ Popup Video
	-------------------------------------------------*/
	$('.popup-vimeo').magnificPopup({
		type: 'iframe',
		disableOn: function () {
			if ($(window).width() < 300) {
				return false;
			}
			return true;
		}
	});
	/*----------------------------------------*/
	/*------ Popup Image
	-------------------------------------------------*/
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});
		/*----------------------------------------*/
	/*  Nice Select
	/*----------------------------------------*/
	$(document).ready(function () {
		$('.nice-select').niceSelect();
	});
	/*----------------------------------------*/
	/* Toggle Function Active
	/*----------------------------------------*/
	// showlogin toggle
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});
	// showlogin toggle
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});
	// showlogin toggle
	$('#cbox').on('click', function () {
		$('#cbox-info').slideToggle(900);
	});

	// Ship box toggle
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});
	/*----------------------------------------*/
	/*  Shop Grid Activation
	/*----------------------------------------*/
	$('.shop_toolbar_btn > button').on('click', function (e) {
	
		e.preventDefault();
		
		$('.shop_toolbar_btn > button').removeClass('active');
		$(this).addClass('active');
		
		var parentsDiv = $('.shop_wrapper');
		var viewMode = $(this).data('role');
		
		
		parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

		if(viewMode == 'grid_3'){
			parentsDiv.children().addClass('col-lg-4 col-md-6 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
			
		}

		if(viewMode == 'grid_4'){
			parentsDiv.children().addClass('col-lg-3 col-md-6 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
		}
		
		if(viewMode == 'grid_list'){
			parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-6 col-sm-6 col-cust-5');
		}
			
	});
	/*----------------------------------------*/
	/*  Cart Plus Minus Button
	/*----------------------------------------*/
	$('.cart-plus-minus').append(
		'<div class="dec qtybutton"><i class="fa fa-minus"></i></div><div class="inc qtybutton"><i class="fa fa-plus"></i></div>'
	);
	$('.qtybutton').on('click', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 1;
			}
		}
		$button.parent().find('input').val(newVal);
	});
	/*----------------------------------------*/
	/*  Countdown
	/*----------------------------------------*/
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Min</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Sec</span></div>'));
		});
	});
	/*---------------------------------
	 	MailChimp
    -----------------------------------*/
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
    });
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
	}

	/*--------------------------
	06. Ajax Contact Form JS
	---------------------------*/
	const form = $('#contact-form'),
	formMessages = $('.form-message');

	 $(form).submit(function (e) {
		 e.preventDefault();
		 var formData = form.serialize();
		 $.ajax({
			 type: 'POST',
			 url: form.attr('action'),
			 data: formData
		 }).done(function (response) {
			 // Make sure that the formMessages div has the 'success' class.
			 $(formMessages).removeClass('alert alert-danger');
			 $(formMessages).addClass('alert alert-success fade show');

			 // Set the message text.
			 formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
			 formMessages.append(response);

			 // Clear the form.
			 $('#contact-form input,#contact-form textarea').val('');
		 }).fail(function (data) {
			 // Make sure that the formMessages div has the 'error' class.
			 $(formMessages).removeClass('alert alert-success');
			 $(formMessages).addClass('alert alert-danger fade show');

			 // Set the message text.
			 if (data.responseText !== '') {
				 formMessages.html("<button type='button' class='close' data-dismiss='alert'>&times;</button>");
				 formMessages.append(data.responseText);
			 } else {
				 $(formMessages).text('Oops! An error occurred and your message could not be sent.');
			 }
		 });
	 });
	/*----------------------------------------*/
	/*  Slick Carousel
	----------------------------------------*/
	
		
})(jQuery);

