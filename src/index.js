document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const taskForm = document.getElementById("create-task-form");
    const taskDescription = document.getElementById("new-task-description");

    // where tasks will go
    const tasks = document.getElementById("tasks");

    //event listener submiting new items
    function createNewTask(e) {
        e.preventDefault() //stops from loading new page
        let input = taskDescription;
        tasks.innerHTML += `<li>${input.value} <button id="remove-button" data-description="${input.value}">X</button></li>`;
        event.target.reset()
    }

    taskForm.addEventListener('submit', createNewTask);


    //event listener for removing items
    function removeTaskButton(e) {
        if (e.target.tagName == "BUTTON") {
            e.target.parentElement.remove();
        }
    }
    tasks.addEventListener('click', removeTaskButton);
});