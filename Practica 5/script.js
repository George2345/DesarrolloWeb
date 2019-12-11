var slideIndex = 1;
showSlider(slideIndex);

function nextSlides(n) {
    showSlider(slideIndex += n);
}

function currentSlide(n) {
    showSlider(slideIndex = n);
}

function showSlider(n){
    var i;
    var slides = document.querySelectorAll(".galery-section");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "flex";
}