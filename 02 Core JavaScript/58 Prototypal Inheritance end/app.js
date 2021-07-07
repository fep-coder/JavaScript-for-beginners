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
dog.speak();

console.log( Animal.prototype );

Animal.prototype.doJob = function () {
    console.log( `My job is to ${this.job}` );
}

dog.doJob();

let cat = new Animal('cat', 'meowing', 'be cute');
cat.doJob();
cat.speak();

Animal.prototype.speak = function () {
    console.log( 'This is the speak() method now.' );
}

cat.speak();
