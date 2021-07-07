let today = new Date();

console.log( today );

let june28 = new Date('2019 06 28'); // y m d
june28 = new Date('28 June 2019');
console.log( june28 );

console.log( today.getDay() );
console.log( today.getUTCDay() );

console.log( today.getMonth() );
console.log( today.getUTCMonth() );

console.log( today.getFullYear() );
console.log( today.getUTCFullYear() );

/* There are also

    getHours()
    getUTCHours()
    getMinutes()
    getUTCMinutes()
    getSeconds()
    getUTCSeconds()
    getMilliseconds()
    getUTCMilliseconds()
*/
console.log( today.getHours() );

console.log( today.getTime() );

let day = 60 * 60 * 24 * 1000;
let years = day * 365;
let now = new Date();
let t = now.getTime();
let yearsPassed = Math.round(t / years);
console.log( yearsPassed );

console.log( new Date().getTimezoneOffset() );

console.log( today );
today.setDate(4);
today.setMonth(11);
today.setFullYear(2049);
console.log( today );

let dateNow = new Date();
dateNow.setTime(day);
console.log( dateNow );