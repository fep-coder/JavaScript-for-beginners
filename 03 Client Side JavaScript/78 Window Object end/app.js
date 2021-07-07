console.log( this );
console.log( window );

x = 10;
console.log( x );
console.log( window.x );

function y() {
    console.log( 'y' );
}
y();
window.y();

y();