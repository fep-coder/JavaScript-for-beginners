hoisted();
function hoisted() {
    console.log( 'I am hoisted' );
}

// hoisted2();
let hoisted2 = function () {
    console.log( 'hoisted2' );
}

console.log( someVar );
var someVar = 'some var';
console.log( someVar );

console.log( letVar );
let letVar = 'let var';