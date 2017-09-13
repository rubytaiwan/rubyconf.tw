//= require jquery/dist/jquery.min
//= require jquery.countdown/dist/jquery.countdown.js
//= require fastclick/lib/fastclick.js

$(document).ready(function () {
  
  // Enable FastClick
  FastClick.attach(document.body);

  $('.countdown').countdown("2018/04/27", function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});

});