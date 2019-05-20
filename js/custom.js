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