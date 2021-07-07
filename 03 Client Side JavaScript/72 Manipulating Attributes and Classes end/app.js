let lastLanguage = document.querySelector('ul#languages li:last-child');

lastLanguage.setAttribute('class', 'someFruit');

lastLanguage.className = 'anotherClass';

lastLanguage.classList.add('yetAnotherClass');

lastLanguage.classList.remove('yetAnotherClass');

lastLanguage.classList.toggle('yetAnotherClass');

lastLanguage.classList.replace('anotherClass', 'someFruit');

console.log( lastLanguage );

console.log( lastLanguage.classList.contains('someFruit') );
