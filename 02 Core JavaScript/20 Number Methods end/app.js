let n = 10.12345;
let n2 = 10.12645;
console.log( n.toFixed(2), n2.toFixed(2) );

console.log( Number.isFinite(1/0) );
console.log( Number.isFinite('hello') );
console.log( Number.isFinite(1.123) );
console.log( Number.isFinite(1) );

console.log( Number.isInteger(1) );
console.log( Number.isInteger(1.123) );
console.log( Number.isInteger('hi') );

console.log( parseInt('10') );
console.log( parseInt('10.123') );

console.log( parseFloat('10') );
console.log( parseFloat('10.123') );