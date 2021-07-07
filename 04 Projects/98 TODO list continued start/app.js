let tasksUl = document.querySelector('ul#tasks');
let taskInput = document.querySelector('input#task');
let form = document.querySelector('form#taskForm');
let tasksArray = [];
let clearButton = document.querySelector('button#clear');

populateTasksArray();
getTasks();

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // console.log( 'form submit detected' );
    // console.log( taskInput.value );

    if (taskInput.value !== "") tasksArray.push(taskInput.value);
    taskInput.value = "";
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
    getTasks();
});

function getTasks() {
    if (tasksArray.length > 0) {
        tasksUl.innerHTML = "";
        tasksArray.forEach((task, index) => {
            let li = document.createElement('li');
            li.innerHTML = `<input type="text" value="${task}" readonly /> <span class="removeTask btn btn-small btn-primary float-right">remove task</span>`;
            li.classList.add('list-group-item');
            li.setAttribute('data-id', index);
            tasksUl.appendChild(li);
        });
    } else {
        tasksUl.textContent = 'There are no tasks at the moment.';
    }
}

function populateTasksArray() {
    if (localStorage.getItem("tasks") !== null) {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(task => {
            tasksArray.push(task);
        });
    }
}