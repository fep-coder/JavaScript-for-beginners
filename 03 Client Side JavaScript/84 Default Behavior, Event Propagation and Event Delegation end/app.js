let google = document.querySelector('a#google');
google.addEventListener('click', (e) => e.preventDefault());

let li = document.querySelector('li');
let ul = document.querySelector('ul');

// li.addEventListener('click', () => console.log( 'clicked on li' ));
// ul.addEventListener('click', () => console.log( 'clicked on ul' ));

// li.addEventListener('click', () => console.log( 'clicked on li' ), true);
// ul.addEventListener('click', () => console.log( 'clicked on ul' ), true);

// li.addEventListener('click', (e) => {
//     console.log( 'clicked on li' )
//     e.stopPropagation();
// });
// ul.addEventListener('click', () => console.log( 'clicked on ul' ));

ul.addEventListener('click', highlight);
function highlight(e) {
    console.log( e.target );
    e.target.classList.toggle('highlight');
}




