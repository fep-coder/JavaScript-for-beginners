let n = 5;
// let n = 1;

// if (n > 3) {
//     console.log( 'n > 3' );
// }

// if (n > 3)
//     console.log( 'n > 3' );

if (n > 3) console.log( 'n > 3' );

if (n > 13) {
    console.log( 'n > 3' );
} else {
    console.log( 'n < 3' );
}

// if (n > 13) 
//     console.log( 'n > 3' );
// else 
//     console.log( 'n < 3' );

// let n2 = 6;
let n2 = 5;

n2%2===0 ? console.log( 'EVEN' ) : console.log( 'ODD' );

// let n3 = 3;
let n3 = 1;
// let n3 = 5;

if (n3 === 1) {
    console.log( 'n3 is 1' );
} else if (n3 === 2) {
    console.log( 'n3 is 2' );
} else if (n3 === 3) {
    console.log( 'n3 is 3' );
} else {
    console.log( 'n3 is > 3' );
}

switch (n3) {
    case 1:
    console.log( 'n3 is 1' );
    // break;  

    case 2:
    console.log( 'n3 is 2' );
    break;

    case 3:
    console.log( 'n3 is 3' );
    break;   

    default:
    console.log( 'n3 is > 3' );
    break;    
}