(function () {

    let tasksUl = document.querySelector('ul#tasks');
    let taskInput = document.querySelector('input#task');
    let form = document.querySelector('form#taskForm');
    let tasksArray = [];
    let clearButton = document.querySelector('button#clear');

    populateTasksArray();
    getTasks();
    addInputDblClickEvents();
    addRemoveTaskClickEvents();

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // console.log( 'form submit detected' );
        // console.log( taskInput.value );

        if (taskInput.value !== "") tasksArray.push(taskInput.value);
        taskInput.value = "";
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
        getTasks();
        addInputDblClickEvents();
        addRemoveTaskClickEvents();
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

    function addInputDblClickEvents() {
        let inputs = document.querySelectorAll('ul#tasks input[type="text"]');
        // console.log( inputs );

        inputs.forEach(input => {
            input.addEventListener('dblclick', function (e) {
                e.target.removeAttribute('readonly');
            });
            input.addEventListener('blur', function (e) {
                e.target.setAttribute('readonly', true);
            });
            input.addEventListener('change', function (e) {
                let index = e.target.parentElement.dataset.id;
                // console.log( index );
                tasksArray[index] = e.target.value;
                localStorage.setItem('tasks', JSON.stringify(tasksArray));
            });
        });
    }

    function addRemoveTaskClickEvents() {
        let spans = document.querySelectorAll('ul#tasks span.removeTask');
        // console.log( spans );

        spans.forEach(span => {
            span.addEventListener('click', function (e) {
                if (!confirm('Confirm deletion')) return;
                let removeSpan = e.target;
                let index = e.target.parentElement.dataset.id;
                tasksArray.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(tasksArray));
                removeSpan.parentElement.remove();
            });
        });
    }

    clearButton.addEventListener('click', function () {
        if (!confirm('Confirm deletion')) return;
        localStorage.clear();
        tasksUl.textContent = 'There are no tasks at the moment.';
    });

})();
