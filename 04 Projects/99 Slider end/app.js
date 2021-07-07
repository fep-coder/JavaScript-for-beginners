let prev = document.querySelector('a.prev');
let next = document.querySelector('a.next');
let slider = document.querySelector('div.slider');
let activeSlide = document.querySelector('div.slide.active');
let slides = document.querySelectorAll('div.slide');
let dots = document.querySelector('div.dots');

document.querySelector('div.slide:first-child').classList.add('first');
document.querySelector('div.slide:last-of-type').classList.add('last');

let firstSlide = document.querySelector('div.slide.first');
let lastSlide = document.querySelector('div.slide.last');

// console.log( firstSlide, lastSlide, prev, next, activeSlide );

setSliderHeight(activeSlide);
createDots();
addClassesToSlides();

function setSliderHeight(activeSlide) {
    let height = activeSlide.offsetHeight;
    // console.log( height );
    slider.style.height = height + 'px';
}

window.onresize = function () {
    let activeSlide = document.querySelector('div.slide.active');
    setSliderHeight(activeSlide);
}

function createDots() {
    for (let i=0; i < slides.length; i++) {
        let span = document.createElement('span');
        span.classList.add('dot', 'dot'+i);
        span.setAttribute('data-id', i);
        dots.appendChild(span);
    }
}

function addClassesToSlides() {
    slides.forEach((slide, index) => {
        slide.classList.add('slide' + index);
    });
}