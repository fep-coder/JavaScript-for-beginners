let form = document.querySelector('form#person');

form.addEventListener('submit', submit);

function submit(e) {
    e.preventDefault();

    let name = document.querySelector('input#name').value;

    let colors = document.querySelector('select#colors');
    let color = colors.value;
    // console.log( colors[colors.selectedIndex].value );

    // let food = '';
    // let checkboxes = document.querySelectorAll('input.food');
    // for (let i = 0; i < checkboxes.length; i++) {
    //     if (checkboxes[i].checked) {
    //         food += checkboxes[i].value + ' ';
    //     }
    // }
    let food = document.querySelectorAll('input.food:checked');
    let foodValues = Array.from(food).map(el => el.value);

    let gender = document.querySelector('input[name="gender"]:checked');
    let genderValue = gender ? gender.value : '';

    let desc = document.querySelector('textarea#desc').value;

    let cars = document.querySelectorAll('select#cars option:checked'); // get node list
    let carValues = Array.from(cars).map(el => el.value);

    console.log( name, color, foodValues.toString(), genderValue, desc, carValues.toString() );
}