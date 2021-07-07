let colors = ['red', 'green', 'blue'];
colors.forEach(function (color, index) {
    console.log( `Index: ${index} - Value: ${color}` );
});

let numbers = [1,2,3];
let square = numbers.map(x => x*x);
console.log( square );

let reduce = [1,2,3,4,5].reduce( (a,b) => a+b );
console.log( reduce );

let reduce2 = [1,2,3,4,5].reduce( (a,b) => a+b, 10 );
console.log( reduce2 );

let evenOdd = [1,2,3,4,5,6,7,8,9,10];
let even = evenOdd.filter(x => x%2===0);
console.log( even );