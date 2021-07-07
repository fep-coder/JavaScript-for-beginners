String.prototype.trimmer = String.prototype.trim || function () {
    return this.replace(/^\s+|\s+$/, '');
}

console.log( `      Hi there     ` );
console.log( `      Hi there     `.trim() );

Number.prototype.isEven = function () {
    return this%2 === 0;
}

Number.prototype.isOdd = function () {
    return this%2 !== 0;
}

console.log( 10..isEven() );
console.log( 9..isEven() );
console.log( 10..isOdd() );
console.log( 9..isOdd() );

Array.prototype.first = function () {
    return this[0];
}

Array.prototype.last = function () {
    return this[this.length-1];
}

let array = [1,2,3,4];
console.log( array.first() );
console.log( array.last() );

Array.prototype.delete = function (i) {
    return this.splice(i,1);
}
array.delete(0);
console.log( array );

class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }

    delete(i) {
        return this.splice(i,1);
    }
}

let myArray = new MyArray(1,2,3,4,5);
console.log( myArray );
myArray.delete(0);
console.log( myArray );