let square = x => x*x;
console.log( square(2) );

let add = (a,b) => a+b;
console.log( add(3,17) );

let hello = () => 'Hello World';
console.log( hello() );

let average = (...args) => {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total / args.length;
}
console.log( average(1,2,3,4,5) );
console.log( average(1,2,3) );