let pattern = /colou?r/;
console.log( pattern.test('color') );
console.log( pattern.test('colour') );

console.log( "hello world".split(/\s+/) );

console.log( 'JavaScript'.match(/[aeiou]/) );
console.log( 'JavaScript'.match(/[aeiou]/g) );

console.log( 'JavaScript'.search(/java/)  );
console.log( 'JavaScript'.search(/java/i)  );