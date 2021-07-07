function Person(name, job) {
    this.name = name;
    this.job = job;
    this.greeting = function () {
        console.log( `Hi, I'm ${this.name} and I am a ${this.job}` );
    }
}

class Person2 {

    constructor(name, job) {
        this.name = name;
        this.job = job;
    }

    greeting() {
        console.log( `Hi, I'm ${this.name} and I am a ${this.job}` );
    }

    greetingCall() {
        console.log( 'greetingCall() method' );
        this.greeting();
    }

    static staticMethod() {
        console.log( 'Static method has been called.' );
    }
}

let person1 = new Person2('Bob', 'builder');
console.log( person1.name );
person1.greeting();

let person2 = new Person2('John', 'programmer');
console.log( person2.name );
person2.greeting();

Person2.staticMethod();

person2.greetingCall();