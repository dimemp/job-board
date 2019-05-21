/*!
 * 
 * Custom js to retrieve data from Google form
 * 
*/
$(document).ready(function(){
	$.getJSON('https://api.sheety.co/8184d022-3142-4a11-910d-7d301afd7bc8', function(data) {
		var template = Handlebars.compile($('#item-template').html())
		$('#items').html(template(data))
	})
})

/*-- Copy link btn --*/
$('.btn-copy-url').on('click', function() {
	
    var text = $(this).parent().find('.input-copy-url');
    var alert = $('#copied-alert-message');
    // Select the text
  	text.select(); 

  	// Copy it
  	document.execCommand('copy');

  	// Remove focus from the input
  	text.blur();

  	// Show message
  	alert.removeClass('d-none');
  	$('#share-link-text').addClass('d-none');
  
  	// Hide message after 2 seconds
  	setTimeout(function () {
    	alert.addClass('d-none');
    	$('#share-link-text').removeClass('d-none');
  	}, 2000);

});