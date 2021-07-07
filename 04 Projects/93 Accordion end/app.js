let accordions = document.querySelectorAll('button.accordion');
// console.log( accordions );

accordions.forEach(accordion => {
    // console.log( accordion );
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    });
});