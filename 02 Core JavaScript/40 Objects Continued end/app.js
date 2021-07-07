const john = {
    firstname: 'John',
    lastname: 'Jones',
    age: 40,
    occupation: 'programmer',
    walk() {
        return `I, ${this.firstname} ${this.lastname} am walking.`;
    }
}

for (let key of Object.keys(john)) {
    console.log( key );
}

for (let value of Object.values(john)) {
    console.log( value );
}

for (let [key, value] of Object.entries(john)) {
    console.log( `Key: ${key} - Value: ${value}` );
}

john.lastname = 'Smith';
console.log( john.lastname );

john.eyeColor = 'blue';
john.work = function () {
    return 'I program for a living.';
}

console.log( john );

john.wife = {
    firstname: 'Mary',
    age: 39
}

console.log( john.wife.firstname );

let bob = {
    program() {
        console.log( 'I program' );
        return this;
    },
    walk() {
        console.log( 'I walk' );
        return this;
    },
    sleep() {
        console.log( 'I sleep' );
        return this;
    },
    eat() {
        console.log( 'I eat' );
        return this;
    }
}

bob.program().walk().sleep().eat();

let {x, ...remaining} = {x:1, a:2, b:3, c:4};
console.log( x );
console.log( remaining );

restParam({
    a: 1,
    b: 2,
    c: 3
});

function restParam({a, ...x}) {
    // a = 1;
    // x = {b:2, c:3};
    console.log( a );
    console.log( x );
}