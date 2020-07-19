// 1. select elements I'll manipulate in JS

const addTaskForm = document.getElementById("create-task-form");
const addTaskDescription = document.getElementById('new-task-description')
const taskBank = document.getElementById('tasks')

//2. Determine which of these elements needs an event listener, and add it

addTaskForm.addEventListener('submit', addTaskAreaFormSubmit)

//3. Create functionality

function addTaskAreaFormSubmit(e) {
    e.preventDefault()
    let input = document.getElementById('new-task-description')
    taskBank.innerHTML += `<li>${input.value}</li>`
    alert('Task successfully added!')
}

