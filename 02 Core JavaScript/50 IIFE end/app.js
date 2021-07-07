(function () {
    console.log( 'Hi from IIFE' );
})();

(function () {
    let color = 'red';
    let language = 'JavaScript';

    init();

    function init() {
        color = 'green';
        language = 'Java';
        console.log( `Color: ${color} - Language: ${language}` );
    }
})();

// init();

let result = (function () {
    return "Returned from IIFE";
})();
console.log( result );

(function (msg, times) {
    for (let i = 1; i <= times; i++) {
        console.log( msg );
    }
})('Hello!', 5);