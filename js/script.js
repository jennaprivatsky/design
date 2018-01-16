$(document).scroll(function() {

	var y = $(document).scrollTop();
	$("#update").html(y);

	if (y > 1000) {
		$("#portfolio-section").fadeIn();
	}

	else {
		$("#portfolio-section").fadeOut();
	}

	if (y > 1000) {
		$("#test").fadeIn();
	}

	else {
		$("#test").fadeOut();
	}

});