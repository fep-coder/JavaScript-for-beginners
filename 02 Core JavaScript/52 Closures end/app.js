function outer() {
    let outside = 'outside'; // outer() has access to this var only

    function inner() {
        let inside = 'inside'; // inner() has access to both inside var and outside var
        console.log( outside );
        console.log( inside );
    }

    console.log( outside );
    inner();
}

outer();

function outer2() {
    let outside = 'outside'; 

    function inner() {
        let inside = 'inside';
        console.log( outside );
        console.log( inside );
    }

    return inner;
}

let closure = outer2();

closure();


