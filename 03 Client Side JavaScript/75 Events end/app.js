// document.body.addEventListener('click', doSomething);
// function doSomething() {
//     console.log( 'click event triggered' );
// }

document.onclick = () => console.log( 'document clicked' );

window.onload = function () {

    document.body.addEventListener('click', doSomething);
    function doSomething() {
        console.log( 'click event triggered' );
    }

}

addEventListener('click', () => console.log( 'global click ' ) );

let event = new Event('click');
window.dispatchEvent(event);