let clickP = document.querySelector('p#click');

clickP.addEventListener('click', () => console.log( 'click' ));
clickP.addEventListener('mousedown', () => console.log( 'mousedown' ));
clickP.addEventListener('mouseup', () => console.log( 'mouseup' ));

let dblclickP = document.querySelector('p#dblClick');
dblclickP.addEventListener('dblclick', highlight);

function highlight(e) {
    e.target.classList.toggle('highlight');
}

let mouseP = document.querySelector('p#mouse');
mouseP.addEventListener('mouseenter', highlight);
mouseP.addEventListener('mouseleave', highlight);

addEventListener('keydown', highlight);
addEventListener('keypress', (e) => console.log( `You pressed the ${e.key} key` ));

addEventListener('keypress', function (e) {
    if (e.key === 'Enter') console.log( 'Enter was pressed' );
});

let removeP = document.querySelector('p#remove');
removeP.addEventListener('click', remove);
function remove(e) {
    console.log( 'One click is all you get.' );
    e.target.style.backgroundColor = 'red';
    removeP.removeEventListener('click', remove);
}
