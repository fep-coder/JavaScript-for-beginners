let fruits = document.querySelector('ul#fruits');
let lastFruit = fruits.querySelector('li:last-child');

let grapefruit = document.createElement('li');
grapefruit.textContent = 'grapefruit';
// fruits.appendChild(grapefruit);
fruits.insertBefore(grapefruit, lastFruit);
fruits.appendChild(grapefruit);

// fruits.removeChild(grapefruit);
grapefruit.remove();

console.log( fruits.innerHTML );

let melons = document.createElement('li');
melons.innerHTML = '<p>melons</p>';
fruits.appendChild(melons);

let script = document.createElement('script');
script.src = 'test.js';
document.body.appendChild(script);