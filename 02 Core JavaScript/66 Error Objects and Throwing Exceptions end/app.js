let error = new Error('There is an error');

console.log( error );

let error2 = new TypeError('You need to use numbers in this function.');

console.log( error2 );

// throw 'stop';

// console.log( 'after throw stop' );

// throw new Error('There is an error...');

// console.log( 'program continues here...' );

function add(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new TypeError('You must use numbers!');
    return a+b;
}

console.log( add(1,2) );
console.log( add(1,'hello') );