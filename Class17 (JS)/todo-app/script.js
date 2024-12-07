const taskInput = document.getElementById('taskInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const listContainer = document.getElementById('listContainer');


function addTodo() {
    let userNewTask = taskInput.value;
    if (!userNewTask) {
        alert("Pls write you task first!");
        return;
    }

    // create todo node...
    let todoList = document.createElement('li');
    let todoTxt = document.createElement('span');
    let removeBtn = document.createElement('button');

    todoTxt.innerText = userNewTask;
    todoTxt.setAttribute('title', userNewTask)
    removeBtn.setAttribute('class', 'btn btn-danger mt-3');
    removeBtn.innerText = 'Remove';

    todoList.appendChild(todoTxt);
    todoList.appendChild(removeBtn);
    listContainer.appendChild(todoList);


    removeBtn.addEventListener('click', function () {
        listContainer.removeChild(todoList)
    })
    taskInput.value = ''
}




addTodoBtn.addEventListener('click', addTodo)
