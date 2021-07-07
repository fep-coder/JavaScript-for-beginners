let myArray = [];

let anotherArray = new Array();

console.log( typeof myArray );

let fruits = ['apples', 'oranges', 'grapes'];

console.log( fruits.length );

console.log( fruits[0] );
console.log( fruits[1] );
console.log( fruits[fruits.length - 1] );

fruits[0] = 'bananas';
console.log( fruits[0] );

fruits[fruits.length] = 'kiwi';
console.log( fruits );

fruits[6] = 'grapefruit';
console.log( fruits );

console.log( fruits[4] );
console.log( fruits[5] );
console.log( fruits[6] );

delete fruits[0];
console.log( fruits );

let [x,y,z] = [1,2,3];
console.log( x, y, z );

let multiArray = [ [1,2,3], ['a', 'b', 'c'] ];
console.log( multiArray[0][1] );
console.log( multiArray[1][2] );