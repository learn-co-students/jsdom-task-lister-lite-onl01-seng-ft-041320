document.addEventListener("DOMContentLoaded", () => { 
  const nodeList = document.querySelectorAll('input');

  const submitButton = nodeList[1];

  const addTodoArea = document.querySelector('form#create-task-form');

  const todoList = document.querySelector('div#list');

  const tasksList = todoList.querySelector('ul#tasks');

  const taskDescription = addTodoArea.querySelector('input[type=text]');

  /*const deleteButton = document.querySelector("button.remove-button")*/

function createNewTask(e) {
  e.preventDefault()
  let input = taskDescription;
  tasksList.innerHTML += `<li>${input.value} <button class="remove-button" data-destcription="${input.value}">X</button></li>`;
  taskDescription.value = ""
};

function deleteTask(e) {
  if ( e.target.tagName == "BUTTON") {
  e.target.parentElement.remove();
  }
}

  submitButton.addEventListener("click", createNewTask);
  todoList.addEventListener("click", deleteTask);

});
