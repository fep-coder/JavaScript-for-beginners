// console.log( this );
console.log( window.document );
console.log( document );

document.write('Hello there');
document.writeln('Hello there 4');
document.write('Hello there 2');
document.write('<p>Hello there 3</p>');

function newContent() {
    document.write('whoops');
}

console.log( document.body );
console.log( document.images );
console.log( document.links );
console.log( document.anchors );
console.log( document.forms );

console.log( document.images[0] );
console.log( document.images.length );
console.log( document.images[0].alt );

console.log( document.links[1].innerText );

console.log( document.forms[0].method );

