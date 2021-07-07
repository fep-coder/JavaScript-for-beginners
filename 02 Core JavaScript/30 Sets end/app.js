let numbers = new Set();

numbers.add(1);
numbers.add(2).add(3).add(4);
console.log( numbers );

numbers.add(1);
console.log( numbers );

let fruits = new Set(['apples', 'oranges', 'grapes', 'bananas', 'grapes']);
console.log( fruits );

console.log( new Set('hello') );

let veggies = new Set(['potato', 'tomato', 'carrots']);
let veggiesArray = [...veggies];
console.log( veggiesArray );

let veggiesArray2 = Array.from(veggies);
console.log( veggiesArray2 );

for (let fruit of fruits) {
    console.log( fruit );
}

console.log( fruits.size );
console.log( fruits.has('apples') );

console.log( fruits[0] ); // not gonna work

console.log( fruits.delete('apples') );
console.log( fruits );

fruits.clear();
console.log( fruits );