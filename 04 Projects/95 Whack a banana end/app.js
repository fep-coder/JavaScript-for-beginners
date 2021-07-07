let bowls = document.querySelectorAll('div.bowl');
let scoreBoard = document.querySelector('span.badge');
let bananas = document.querySelectorAll('div.banana');
let start = document.querySelector('button#start');
let timeUpDiv = document.querySelector('div.timeup');

function randomTime(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function randomBowl(bowls) {
    // console.log( bowls );
    
}

function show() {
    let time = randomTime(200,1000);
    let bowl = randomBowl(bowls);
    console.log( bowl );
}