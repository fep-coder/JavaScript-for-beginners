function greeting(name) {
    console.log( `Hi ${name}` );
}

function sayHi(callback) {
    callback('John');
}

sayHi(greeting);

let numbers = [1,5,3,10];
console.log( numbers.sort() );

console.log( numbers.sort((a,b) => a-b) );