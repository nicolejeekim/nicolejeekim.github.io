// pick the title

const newtitle = document.querySelector("title")
console.log(newtitle)

// and when I scroll, calculate how big the font size should be
window.addEventListener("scroll", function() {
	const pixels = window.pageYOffset
	newtitle.style.fontSize = pixels + "px"
	console.log(newtitle.style.fontSize)
})