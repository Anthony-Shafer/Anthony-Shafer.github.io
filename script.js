// Smooth scrolling
$('a').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){
			window.location.hash = hash;
		});
	}
});

// Form validation
$('form').submit(function(e) {
	var error = '';

	if ($('#name').val() == '') {
		error += 'Please enter your name.\n';
	}

	if ($('#email').val() == '') {
		error += 'Please enter your email.\n';
	}

	if ($('#message').val() == '') {
		error += 'Please enter a message.\n';
	}

	if (error != '') {
		alert(error);
		return false;
	} else {
		return true;
	}
});
