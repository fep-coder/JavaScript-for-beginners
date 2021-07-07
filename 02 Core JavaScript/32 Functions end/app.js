function hello() {
    console.log( 'Hello World' );
}
hello();

let color = function () {
    console.log( 'red' );
}
color();

let fruit = function apples() {
    console.log( 'apples' );
}
fruit();

let hi = new Function('console.log("hi")');
hi();

let a = color();
let b = color;
b();

function someVeggie() {
    return 'cucumber';
}

let veggie = someVeggie();
console.log( veggie );