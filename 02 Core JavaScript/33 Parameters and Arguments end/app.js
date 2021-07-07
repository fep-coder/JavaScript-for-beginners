function square(x) {
    return x*x;
}
console.log( square(5) );

function average(a,b,c) {
    return (a+b+c) / 3;
}
console.log( average(1,2,3) );

console.log( average(1,2) );

console.log( average(1,2,3,4,5,6) );

function args() {
    return arguments;
}
console.log( args('hi', 'there') );
console.log( args(1,2,3,4,5) );

function args2() {
    if (arguments.length) {
        return `${arguments.length} ${arguments[0]}`;
    }
}
console.log( args2(1,2,3) );

function rest(...args) {
    for (let arg of args) {
        console.log( arg );
    }
}
rest(1,2,3,4,5);

function average2(...args) {
    let total = 0;
    for (let arg of args) {
        total+=arg;
    }
    return total / args.length;
}
console.log( average2(1,2,3,4,5) );
console.log( average2(1,2,3) );

function helloSomething(greeting, name='World') {
    return `${greeting} ${name}`;
}
console.log( helloSomething('Hello') );
console.log( helloSomething('Hello', 'John') );

// name = name || "World"