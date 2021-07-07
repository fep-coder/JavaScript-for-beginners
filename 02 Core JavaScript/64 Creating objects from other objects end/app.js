let Human = {
    arms: 2,
    legs: 2,
    walk() { console.log('walking') }
}

let john = Object.create(Human);

console.log(Human);
console.log(john);

john.walk();

console.log(john.arms);
console.log(Human.isPrototypeOf(john));

john.job = 'programmer';
john.age = 52;

console.log(john);

john.walk = function () {
    console.log(`I don't walk, I run!`);
}

john.walk();

let obj1 = {};
let obj2 = { name: 'JavaScript' };

Object.assign(obj1, obj2);
console.log( obj1 );

let obj3 = {};
let obj4 = { numbers: [1,2,3,4] };

Object.assign(obj3, obj4);

console.log( obj3 );

obj3.numbers.push(5);
console.log( obj4.numbers );