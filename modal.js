//1. When we click an image, show the lightbox
//2. We want to grab the image that's just been clicked and show it inside the modal
//3. When we click close, it will hide the modal
//4. Our link doesn't follow the default href

$('.photos a').on('click', function() {

	var currentImage = $(this).html()
	// $('.modal').show()
	$('.modal-content').html(currentImage)
	$('.modal').fadeIn(300)

	return false
})


$('.modal-close, .modal-background').on('click', function() {
	$('.modal').fadeOut(300)

	return false
})