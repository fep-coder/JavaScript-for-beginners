try {
    a+b;
}
catch(error) {
    console.log( typeof error );
    console.log( error );
    console.log( error.message );
}
finally {
    console.log( 'finally' );
}

let a = 1;
let b = 2;
let c = a + b;
let d = c + 10;
console.log( d );