class Animal {

    constructor(type, language, job) {
        this.type = type;
        this.language = language;
        this.job = job;
    }

    speak() {
        console.log( `I am a ${this.type} and my language is ${this.language}` );
    }

}

let dog = new Animal('dog', 'barking', 'protect');
let cat = new Animal('cat', 'meowing', 'be cute');

console.log( cat.constructor.prototype );

console.log( cat.__proto__ );

console.log( Object.getPrototypeOf(cat) );

console.log( Animal.prototype.isPrototypeOf(dog) );
console.log( Animal.prototype.isPrototypeOf(cat) );