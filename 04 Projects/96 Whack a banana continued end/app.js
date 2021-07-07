let bowls = document.querySelectorAll('div.bowl');
let scoreBoard = document.querySelector('span.badge');
let bananas = document.querySelectorAll('div.banana');
let start = document.querySelector('button#start');
let timeUpDiv = document.querySelector('div.timeup');

let lastBowl;
let score;
let timeUp = false;

function randomTime(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
}

function randomBowl(bowls) {
    // console.log( bowls );
    let bowlIndex = Math.floor(Math.random() * bowls.length); // 0-5
    let bowl = bowls[bowlIndex];

    if (bowl === lastBowl) {
        console.log( 'same again' );
        return randomBowl(bowls);
    }

    lastBowl = bowl;
    return bowl;
}

function show() {
    let time = randomTime(500,1500);
    let bowl = randomBowl(bowls);
    // console.log( bowl );

    bowl.classList.add('show');
    setTimeout(() => {
        bowl.classList.remove('show');
        if(!timeUp) show();
    }, time);
}

function whack(e) {
    score++;
    this.parentElement.classList.remove('show');
    scoreBoard.textContent = score;
}

bananas.forEach(banana => {
    banana.addEventListener('click', whack);
});

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    timeUpDiv.classList.add('d-none');
    score = 0;

    show();
    setTimeout(() => {
        timeUp = true;
        timeUpDiv.classList.remove('d-none');
    }, 10000);
}

start.addEventListener('click', startGame);