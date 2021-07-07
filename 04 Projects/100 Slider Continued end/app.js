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
    document.querySelector('div.dots > span:first-child').classList.add('first', 'active');
    document.querySelector('div.dots > span:last-child').classList.add('last');
}

function addClassesToSlides() {
    slides.forEach((slide, index) => {
        slide.classList.add('slide' + index);
    });
}

next.addEventListener('click', function(e) {
    e.preventDefault();

    let activeSlide = document.querySelector('div.slide.active');
    activeSlide.classList.remove('active');
    if (activeSlide.classList.contains('last')) {
        firstSlide.classList.add('active');
    } else {
        activeSlide.nextElementSibling.classList.add('active');
    }

    let activeDot = document.querySelector('span.dot.active');
    activeDot.classList.remove('active');
    if (activeDot.classList.contains('last')) {
        document.querySelector('div.dots > span:first-child').classList.add('active');
    } else {
        activeDot.nextElementSibling.classList.add('active');
    }

});

prev.addEventListener('click', function(e) {
    e.preventDefault();

    let activeSlide = document.querySelector('div.slide.active');
    activeSlide.classList.remove('active');
    if (activeSlide.classList.contains('first')) {
        lastSlide.classList.add('active');
    } else {
        activeSlide.previousElementSibling.classList.add('active');
    }

    let activeDot = document.querySelector('span.dot.active');
    activeDot.classList.remove('active');
    if (activeDot.classList.contains('first')) {
        document.querySelector('div.dots > span:last-child').classList.add('active');
    } else {
        activeDot.previousElementSibling.classList.add('active');
    }

});