let food = {
    type: 'fruit',
    fruits: ['apples', 'oranges', 'grapes'],
    showFruits() {
        this.fruits.forEach(function (fruit) {
            console.log( `${this.type}: ${fruit}` );
        });
    }
}

food.showFruits();
// console.log( this );

let food2 = {
    type: 'fruit',
    fruits: ['apples', 'oranges', 'grapes'],
    showFruits() {
        let _this = this;
        this.fruits.forEach(function (fruit) {
            console.log( `${_this.type}: ${fruit}` );
        });
    }
}
food2.showFruits();

let food3 = {
    type: 'fruit',
    fruits: ['apples', 'oranges', 'grapes'],
    showFruits() {
        this.fruits.forEach(function (fruit) {
            console.log( `${this.type}: ${fruit}` );
        }.bind(this));
    }
}
food3.showFruits();

let food4 = {
    type: 'fruit',
    fruits: ['apples', 'oranges', 'grapes'],
    showFruits() {
        this.fruits.forEach( fruit => console.log( `${this.type}: ${fruit}` ) );
    }
}
food4.showFruits();