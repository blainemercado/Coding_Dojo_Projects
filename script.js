$(document).ready(function(){

	$('#btn').click(function(){

		var fName = $('#first').val();
		var lName = $('#last').val();
		var name = fName + " " + lName;
		console.log(name);

		var text = $('#description').val();

		var info = '<p>' + text + '</p>';

		var conCard = '<div class="card"><h2>' + name + "</h2>";
			conCard += "<h3>Click for description!</h3>";
			conCard += info;
			conCard += "</div>";

		
		$('.right').append(conCard);

		// $('.card').append(info);

		$('.card').children('p').hide();
		$('.card').children('h2').show();
		$('.card').children('h3').show();

	});

	$(document).on('click', '.card', function(){
		$(this).children('h2').hide();
		$(this).children('h3').hide();
		$(this).children('p').show();


	});




});