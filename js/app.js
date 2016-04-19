var main = function() {

	var educationVisible = false;
	var experienceVisible = false;
	var projectsVisible = false;
	var skillsVisible = false;

	$('#education').toggle().hide();
	$('#experience').toggle().hide();
	$('#projects').toggle().hide();
	$('#skills').toggle().hide();


	$('#nav-education').click(function() {
		if (!educationVisible) {
			$('#education').fadeIn(1500);
			$('#nav-education').css('color', 'red');
			educationVisible = true;
		}
		else if (educationVisible) {
			$('#education').fadeOut(1500);
			educationVisible = false;
			$('#nav-education').css('color', 'black');
		}
	});

	$('#nav-experience').click(function() {
		if (!experienceVisible) {
			$('#experience').fadeIn(1500);
			$('#nav-experience').css('color', 'red');
			experienceVisible = true;
		}
		else if (experienceVisible) {
			$('#experience').fadeOut(1500);
			experienceVisible = false;
			$('#nav-experience').css('color', 'black');
		}
	});

	$('#nav-projects').click(function() {
		if (!projectsVisible) {
			$('#projects').fadeIn(1500);
			$('#nav-projects').css('color', 'red');
			projectsVisible = true;
		}
		else if (projectsVisible) {
			$('#projects').fadeOut(1500);
			projectsVisible = false;
			$('#nav-projects').css('color', 'black');
		}
	});

	$('#nav-skills').click(function() {
		if (!skillsVisible) {
			$('#skills').fadeIn(1500);
			$('#nav-skills').css('color', 'red');
			skillsVisible = true;
		}
		else if (skillsVisible) {
			$('#skills').fadeOut(1500);
			skillsVisible = false;
			$('#nav-skills').css('color', 'black');
		}
	});
};

$(document).ready(main);