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

class Dog extends Animal {

    // constructor(type, language, job, name) {
    //     super(type, language, job);
    //     this.name = name;
    // }

    constructor(name) {
        super();
        this.name = name;
    }

    attack() {
        console.log( `${this.name} attacks!` );
    }

    speak() {
        console.log( `I am a ${this.type} and my language is ${this.language} and my name is ${this.name}` );
    }

}

let newDog = new Dog('pitbull', 'barking', 'cuddle', 'Bobby');
newDog.speak();
newDog.attack();

let anotherDog = new Dog('Jimmy');
anotherDog.attack();