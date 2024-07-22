


document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const cuteGif = document.querySelector('.cute-gif');





    function updateGif() {
        const taskCount = todoList.children.length;
        if (taskCount === 0) {
            cuteGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWZia3kzZzlwNGlvdGx3dzh1aWNsZGNlNTZpN3l5ZWp1Zjd2cXRyZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hECJDGJs4hQjjWLqRV/giphy.gif"; // new relaxed cat
        } else if (taskCount < 1) {
            cuteGif.src = "https://media.giphy.com/media/LkjlH3rVETgsg/giphy.gif?cid=ecf05e47cnk1wc2ssrczfh8qx92e6dayvq06jlibmure7843&ep=v1_gifs_search&rid=giphy.gif&ct=g"; // computer busy cat
        } else if (taskCount < 2) {
            cuteGif.src = "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"; // medium busy cat
        } else if (taskCount < 4) {
            cuteGif.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"; //bashing keyboard cat
        } else {
            cuteGif.src = "https://media.giphy.com/media/rdJCzxBWIvqGA/giphy.gif?cid=ecf05e473mhna4gz748w8ufaqp6vef5wh0lsb1clebixqgme&ep=v1_gifs_related&rid=giphy.gif&ct=g"; // space cat
        }
    }

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTask(task));

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            saveTask(taskText);
            todoInput.value = ' ';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Done';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
            removeTask(taskText);
            updateGif();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    function saveTask(taskText) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateGif();
    }

    function removeTask(taskText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateGif();
    }

    updateGif();
});