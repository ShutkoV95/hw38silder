const doc = document;
const btnPrev = doc.querySelector('.btn-prev');
const btnNext = doc.querySelector('.btn-next');
const slides = doc.querySelectorAll('.slide');
const fancyBoxWindow = doc.querySelector('.fancyBoxWindow');
const fancyBox = doc.querySelector('.fancyBox');
const fancyBoxClose = doc.querySelector('.fancyBoxClose');


const slidesCount = slides.length;
let currentSlide = 1;

showCurrentSlide();


slides.forEach(function(slide) {
    slide.onclick = function() {
        const img = this.innerHTML;
        fancyBox.innerHTML = img;
        fancyBoxWindow.style.display = 'flex';
    }
}) 

fancyBoxClose.onclick = function() {
    fancyBoxWindow.style.display = 'none';
} 


btnPrev.onclick = function() {
    prevSlide();
    showCurrentSlide();
}
btnNext.onclick = function() {
    nextSlide();
    showCurrentSlide();
}


function showCurrentSlide() {
    slides.forEach(function(slide) {
        slide.classList.remove('slide-active');
    });
    slides[currentSlide - 1].classList.add('slide-active');
    console.log(currentSlide);
}

function prevSlide() {
    currentSlide --;
    if (currentSlide < 1) {
        currentSlide = slidesCount;
    }
}

function nextSlide() {
    currentSlide ++;
    if (currentSlide > slidesCount) {
        currentSlide = 1;
    }
}
