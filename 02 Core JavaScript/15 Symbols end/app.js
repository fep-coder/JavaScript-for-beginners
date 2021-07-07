// let ID = Symbol();
let ID = Symbol('This is a unique ID');
console.log( typeof ID );
console.log( ID );

let SOME_KEY = Symbol();
let obj = {};

obj[SOME_KEY] = 123;
console.log( obj[SOME_KEY] );