let name = 'George';

console.log( name.length );
console.log( name['length'] );

// o.some property // not gonna work
// o['some property'] // would work

name.length = 10;
console.log( name.length );

console.log( name.toUpperCase() );
console.log( name.toLowerCase() );
console.log( name.charAt('0') );
console.log( name.indexOf('e') );
console.log( name.indexOf('eor') );
console.log( name.indexOf('y') );
console.log( name.lastIndexOf('e') );

// if (name.indexOf('e') !== -1) do something...

console.log( name.includes('e') );
console.log( name.includes('y') );
console.log( name.startsWith('G') );
console.log( name.startsWith('g') );
console.log( name.endsWith('g') );
console.log( name.endsWith('e') );