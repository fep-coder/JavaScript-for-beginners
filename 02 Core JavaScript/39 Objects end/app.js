let john = {
    firstname: 'John',
    lastname: 'Jones',
    age: 40,
    occupation: 'programmer',
    walk() {
        return `I, ${this.firstname} ${this.lastname} am walking.`;
    }
}

console.log( john );

let mary = {
    'first name': 'Mary'
}

let fruit = 'apples';
let veggie = 'carrots';

let rawFood = {
    fruit,
    veggie
}
console.log( rawFood );

console.log( john.firstname );
console.log( mary['first name'] );
// console.log( mary.first name ); // not gonna work

console.log( john.food );

console.log( 'firstname' in john );
console.log( 'name' in john );

console.log( john.hasOwnProperty('firstname') );
console.log( john.hasOwnProperty('name') );

for (let key in john) {
    // console.log( `Key: ${key} - Value: ${john[key]}` );
    if (john.hasOwnProperty(key)) {
        console.log( `Key: ${key} - Value: ${john[key]}` );
    }
}

