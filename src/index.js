document.addEventListener("DOMContentLoaded", () => {
  const addTodoArea = document.querySelector('form#create-task-form');

  const taskDescription = addTodoArea.querySelector('input[type=text]');

  const todoList = document.querySelector('div#list');

  const tasksList = todoList.querySelector('ul#tasks');

  function createNewTaskSubmit(e) {
    e.preventDefault()
    let input = taskDescription;
    tasksList.innerHTML += `<li>${input.value} <button class="remove-button" data-description="${input.value}">X</button></li>`;
    taskDescription.value = ""
  }

   function removeTaskButton(e) {
     if ( e.target.tagName == "BUTTON" ) {
       let li = e.target.parentElement;
       li.parentElement.removeChild(li)
     }

   }

  addTodoArea.addEventListener('submit', createNewTaskSubmit);
  todoList.addEventListener('click', removeTaskButton);
}
);
