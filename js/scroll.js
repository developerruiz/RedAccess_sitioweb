$(window).scroll(function() {
	if ($("#menu").offset().top > 15) {
		$("#menu").addClass("bg-primary");
	} else {
		$("#menu").removeClass("bg-primary");
	}
});