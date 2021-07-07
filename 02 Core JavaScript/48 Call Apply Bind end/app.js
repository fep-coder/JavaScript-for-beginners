function hello() {
    console.log(`Hello, my name is ${this.name}`);
}

let person = { name: 'John' };

hello.call(person);

function hello2(job = 'programmer') {
    console.log(`Hello, my name is ${this.name} and I am a ${job}`);
}

hello2.call(person);
hello2.call(person, 'builder');

hello2.apply(person, ['builder']);

let obj = {
    x: 10,
    getX: function () {
        return this.x;
    }
}

let unboundGetX = obj.getX;
console.log( unboundGetX() );

let boundGetX = unboundGetX.bind(obj);
console.log( boundGetX() );


