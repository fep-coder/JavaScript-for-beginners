let firstFruit = fruits.querySelector('li:first-child');

// firstFruit.style.color = 'yellow';
// firstFruit.style.backgroundColor = 'blue';
// firstFruit.style['background-color'] = 'blue';

firstFruit.style.display = 'none';
firstFruit.style.display = 'list-item';

console.log( firstFruit.style );

firstFruit.classList.add('highlight');