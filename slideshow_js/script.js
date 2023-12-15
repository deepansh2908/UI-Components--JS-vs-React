let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	//getting all the image divs
	let slides = document.getElementsByClassName('mySlides');

	//getting all the dots
	let dots = document.getElementsByClassName('dot');

	//resetting the slideIndex if it exceeds length on clicking next button
	if (n > slides.length) {
		slideIndex = 1;
	}
	//resetting the slideIndex if it preceeds length on clicking prev button
	if (n < 1) {
		slideIndex = slides.length;
	}

    let i;
    for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}
