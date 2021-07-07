let form;

form = document.forms[0];
console.log( form );

form = document.getElementsByTagName('form')[0];
console.log( form );

form = document.forms.search;
console.log( form );

form = document.forms['search'];
console.log( form );

// console.log( search );
// console.log( btnSubmit );

form = document.querySelector('form#search');
console.log( form );

console.log( form.searchInput );
console.log( form['searchInput'] );

// form.submit();
form.reset();
form.action = '/anotherSearch';
console.log( form.elements );

let [input, button] = form.elements;
console.log( input );
console.log( button );

input.addEventListener('focus', () => console.log( 'focus event triggered' ));
input.addEventListener('blur', () => console.log( 'blur event triggered' ));
input.addEventListener('change', () => console.log( 'change event triggered' ));

form.addEventListener('submit', (e) => {
    console.log( 'form submitted' );
    console.log( `You searched for: ${input.value}` );
    e.preventDefault();
});

input.value = 'fruit';