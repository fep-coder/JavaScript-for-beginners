let stuff = new Map();

stuff.set('color', 'red');
stuff.set('fruit', 'bananas').set('evenNumber', 10).set('oddNumber', 9);

console.log( stuff );

let arrayValues = new Map([ ['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3'] ]);
console.log( arrayValues );

console.log( [... stuff] );
console.log( Array.from(stuff) );

console.log( stuff.get('color') );

console.log( stuff.has('fruit') );

console.log( stuff.size );

console.log( stuff.delete('evenNumber') );
console.log( stuff );

// stuff.clear();
// console.log( stuff.size );

for (let key of stuff.keys()) {
    console.log( key );
}

for (let value of stuff.values()) {
    console.log( value );
}

for (let [key, value] of stuff.entries()) {
    console.log( `Key: ${key} - Value: ${value}` );
}