// for (let i = 1; i <= 10; i++ ) {
//     console.log( i );
// }

// for (let i = 1; i <= 10; i++ ) {
//     for (let j = 1; j <= 5; j++) {
//         console.log( `${i} * ${j} is ${i*j}` );
//     }
// }

// for (let i = 1; i <= 10; i++ ) {
//     if (i === 3) break; // stop after 2
//     console.log( i );
// }

// for (let i = 1; i <= 10; i++ ) {
//     if (i === 3) continue; // skip 3
//     console.log( i );
// }

for (let i = 1; i <= 10; i++ ) {
    if (i%2!==0) continue; // skip 3
    console.log( i );
}