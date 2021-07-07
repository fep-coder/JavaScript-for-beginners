function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

let food = ['grapes', 'bananas', 'pineapple', 'pork', 'beef', 'chicken'];

let getMeat = new Promise( (resolve, reject) => {
    let n = getRandomNumber(6);
    (n > 2) ? resolve(n) : reject(n);
} );

// getMeat.then(
//     result => console.log( `Yes! I'm gonna eat ${food[result]}` ), 
//     result => console.log( `Dang! It's ${food[result]} again` ));

getMeat
        .then(result => console.log( `Yes! I'm gonna eat ${food[result]}` ))
        .catch(result => console.log( `Dang! It's ${food[result]} again` ))
        .finally( () => console.log( 'finally' ));

console.log( '1' );
console.log( '2' );
console.log( '3' );

// login(username)
//     .then(user => userInfo(user.id))
//     .then(message => getLastMessage(message))
//     .catch(error => handleError(error));