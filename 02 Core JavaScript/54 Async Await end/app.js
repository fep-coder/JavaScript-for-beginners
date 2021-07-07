function getStringByPromise() {
    return new Promise((resolve) => {
        resolve("JavaScript is great");
    });
}

async function printString() {
    let fetchedString = await getStringByPromise();
    console.log( fetchedString );
}

printString();

function someText() {
    return "some text";
}

async function getText() {
    let text = await someText();
    console.log( text );
}

getText();

console.log( 'waiting for text...' );