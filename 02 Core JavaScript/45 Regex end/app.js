let pattern = /[a-zA-Z]+ing$/;
let pattern2 = new RegExp('[a-zA-Z]+ing');

console.log( pattern.test('fly') );
console.log( pattern.test('flying') );

console.log( pattern.exec('fly') );
console.log( pattern.exec('flying') );

pattern = /bananas/;
console.log( pattern.test('bananas') );
console.log( pattern.test('banana') );
console.log( pattern.test('Bananas') );

let names = 'John, Jack, Ann, Ann';
console.log( names.replace('Ann', 'Mary') );
console.log( names.replace(/ann/ig, 'Mary') );