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
