let h1 = document.getElementById('title');
console.log( h1 );

let lis = document.getElementsByTagName('li');
console.log( lis );
console.log( lis[4] );

let lis2 = document.getElementsByClassName('language');
console.log( lis2 );
console.log( lis2[0] );
console.log( lis2.length );

let csharp = document.querySelector('li.csharp');
console.log( csharp );

let h1Again = document.querySelector('#title');
console.log( h1Again );

let languageLis = document.querySelectorAll('li.language');
console.log( languageLis );
console.log( languageLis[languageLis.length-1] );

let lastLanguage = document.querySelector('ul#languages li:last-child');
console.log( lastLanguage );

let fruits = document.querySelector('ul#fruits');
let firstFruit = fruits.querySelector('li:first-child');
let lastFruit = fruits.querySelector('li:last-child');
console.log( firstFruit, lastFruit );

console.log( fruits.childNodes );
console.log( fruits.firstChild );
console.log( fruits.lastChild );

console.log( fruits.children );
console.log( lastLanguage.previousElementSibling );
console.log( firstFruit.nextElementSibling );
console.log( firstFruit.parentElement );
console.log( firstFruit.parentElement.parentElement );