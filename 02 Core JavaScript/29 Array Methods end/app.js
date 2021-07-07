let numbers = ['one', 'two', 'three', 'four', 'five'];

console.log( numbers.pop() );
// console.log( numbers );

console.log( numbers.shift() );
// console.log( numbers );

console.log( numbers.push('five') );
// console.log( numbers );

console.log( numbers.unshift('one') );
// console.log( numbers );

console.log( numbers.concat(['six', 'seven']) );
console.log( numbers );
// numbers = numbers.concat(['six', 'seven']);
// console.log( numbers );

numbers = [...numbers, ...['six', 'seven']];
// console.log( numbers );

// console.log( numbers.join() );
// console.log( numbers.join(' & ') );
// console.log( numbers );

// console.log( numbers.slice(2,4) );
// console.log( numbers );

// console.log( numbers.splice(1,1) );
// console.log( numbers );

// console.log( numbers.splice(0,1,'eleven') );
// console.log( numbers );

// console.log( numbers.reverse() );
console.log( numbers );

console.log( numbers.sort() );
console.log( numbers );
console.log( [3,1,10].sort() );

console.log( numbers.indexOf('one') );
console.log( numbers.indexOf('eleven') );

console.log( numbers.includes('one') );
console.log( numbers.includes('eleven') );

console.log( numbers.includes('one', 4) );

let splitString = "hello how are you";
console.log( splitString.split() );
console.log( splitString.split(" ") );
console.log( splitString );
splitString = splitString.split(" ");
console.log( splitString );