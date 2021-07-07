let person = {
    name: 'John',
    age: 30,
    occupation: 'programmer'
}

let personJSON = JSON.stringify(person);
console.log( personJSON);

let personObject = JSON.parse(personJSON);
console.log( personObject );