const slides = [
	{
		image:"./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>",
		active: true
	},
	{
		image:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		active: false
	},
	{
		image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		active: false
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>",
		active: false
	}
] 
const arrowleft = document.querySelector(".arrow_left")
const arrowright = document.querySelector(".arrow_right")
const bannerslide = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")
const dots = document.querySelector('.dots')

 
const loadBannerDots = () => {
	let x = 0
	while(x < slides.length){
		const dot = document.createElement('span')
		dot.classList.add('dot')
		dots.innerHTML += dot.outerHTML
		x++
	}
	const currentActiveSlide = slides.find(slide => slide.active)
	const currentActiveIndex = slides.indexOf(currentActiveSlide)
	dots.childNodes[currentActiveIndex].classList.add('dot_selected')
}

window.onload = loadBannerDots()

arrowleft.addEventListener("click",()=>{
	const currentActiveSlide = slides.find(slide => slide.active)
	const currentActiveIndex = slides.indexOf(currentActiveSlide)

	currentActiveSlide.active = false
	const nextSlideIndex = currentActiveIndex === 0 ? slides.length - 1 : currentActiveIndex - 1
	slides[nextSlideIndex].active = true

	bannerslide.src = slides[nextSlideIndex].image
	bannerText.innerHTML = slides[nextSlideIndex].tagLine

	dots.childNodes.forEach(dot => dot.classList.remove('dot_selected'))
	dots.childNodes[nextSlideIndex].classList.add('dot_selected')
})

arrowright.addEventListener("click",()=>{
	const currentActiveSlide = slides.find(slide => slide.active)
	const currentActiveIndex = slides.indexOf(currentActiveSlide)

	currentActiveSlide.active = false
	const nextSlideIndex = currentActiveIndex === (slides.length-1) ? 0: currentActiveIndex + 1
	slides[nextSlideIndex].active = true

	bannerslide.src = slides[nextSlideIndex].image
	bannerText.innerHTML = slides[nextSlideIndex].tagLine

	dots.childNodes.forEach(dot => dot.classList.remove('dot_selected'))
	dots.childNodes[nextSlideIndex].classList.add('dot_selected')
})
