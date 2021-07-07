localStorage.setItem('name', 'John');

console.log(localStorage.getItem('name'));

sessionStorage.setItem("lastname", 'Jones');
console.log( sessionStorage.getItem('lastname') );

localStorage.color = 'red';
console.log( localStorage.color );

// localStorage.removeItem('color');
delete localStorage.color;
console.log( localStorage.color );

localStorage.clear();

let obj = {x:1, y:2};
localStorage.setItem('obj', JSON.stringify(obj));
console.log( localStorage.getItem('obj') );

let obj2 = JSON.parse(localStorage.getItem('obj'));
console.log( obj2 );