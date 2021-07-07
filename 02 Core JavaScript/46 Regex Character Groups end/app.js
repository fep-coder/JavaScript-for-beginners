let vowels = /[aeiou]/;
console.log( vowels.test('abc') );
console.log( vowels.test('aabc') );
console.log( vowels.test('bbc') );

let AtoZ = /[A-Z]/;
console.log( AtoZ.test('abc') );
console.log( AtoZ.test('Abc') );

let atoz = /[a-zA-Z]/;
console.log( atoz.test('abc') );
console.log( atoz.test('Abc') );
console.log( atoz.test('4') );

let numbers = /[0-9]/;
console.log( numbers.test('4') );
console.log( numbers.test('34a') );
console.log( numbers.test('abc') );

let noAtoZ = /[^A-Z]/;
console.log( noAtoZ.test('abc') );
console.log( noAtoZ.test('Abc') );
console.log( noAtoZ.test('ABC') );

let pattern = /[Jj][Aa][Vv][Aa]/;
console.log( pattern.test('Java') );
console.log( pattern.test('JAVA') );
console.log( pattern.test('JavaScript') );
console.log( pattern.test('Script') );

pattern = /(red|green|blue)/;
console.log( pattern.test('red') );
console.log( pattern.test('green') );
console.log( pattern.test('blue') );
console.log( pattern.test('yellow') );
