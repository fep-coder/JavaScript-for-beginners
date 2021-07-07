function Person(name, job) {
    this.name = name;
    this.job = job;
    this.greeting = function () {
        console.log( `Hi, I'm ${this.name} and I am a ${this.job}` );
    }
}

let person1 = new Person('Bob', 'builder');

console.log( person1.name );
person1.greeting();

let person2 = new Person('John', 'programmer');
console.log( person2.name );
person2.greeting();

let personX = new Person;
console.log( personX.name );