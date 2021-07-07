console.time('test');

let a = 1 + 10;

console.timeEnd('test');

let t0 = performance.now();

let b = 1 + 10;

let t1 = performance.now();

console.log( `Time taken: ${t1 - t0}` );

