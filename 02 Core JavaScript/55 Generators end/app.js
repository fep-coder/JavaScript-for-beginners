function* exampleGenerator() {
}

function* fibonacci(a,b) {
    let [prev, current] = [a,b];
    while(true) {
        [prev, current] = [current, prev+current];
        yield current;
    }
}

let sequence = fibonacci(1,2);
console.log( sequence.next() );
console.log( sequence.next() );
console.log( sequence.next() );
console.log( sequence.next() );
console.log( sequence.next() );
console.log( sequence.next() );
console.log( sequence.next() );