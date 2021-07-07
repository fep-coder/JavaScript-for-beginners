function Person(name, job) {
    this.name = name;
    this.job = job;
    this.greeting = function () {
        console.log( `Hi, I'm ${this.name} and I am a ${this.job}` );
    }
}