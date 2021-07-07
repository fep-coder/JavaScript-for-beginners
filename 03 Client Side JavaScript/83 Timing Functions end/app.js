// window.setTimeout( () => console.log( 'boom' ), 1000 );

let timeout = setTimeout( () => console.log( 'boom 2' ), 2000);
console.log( timeout );
clearTimeout(1);

function js() {
    console.log( 'js' );
}
let interval = setInterval(js, 1000);
console.log( interval );
clearInterval(2);