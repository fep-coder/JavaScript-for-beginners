let n = 10;

let n2 = n;
console.log( n2 );
n2 = 11;
console.log( n2, n );

const o = { x: 1, y: 2};
const o2 = o;
o2.x = 11;
console.log( o.x );