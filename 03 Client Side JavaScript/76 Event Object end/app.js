addEventListener('click', function(event) {
    console.log( event );
    console.log( event.type );
    console.log( event.target );

    console.log( `
    screen: X: ${event.screenX} Y: ${event.screenY}
    page: X: ${event.pageX} Y: ${event.pageY}
    client: X: ${event.clientX} Y: ${event.clientY}
    ` );
});