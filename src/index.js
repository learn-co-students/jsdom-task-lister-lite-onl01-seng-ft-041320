const form = document.getElementById('create-task-form');
const description = document.getElementById('new-task-description');
const tasksList = document.getElementById('tasks');

document.addEventListener("DOMContentLoaded", () => {
  // your code here

  form.addEventListener("submit", (e) => {
    addNewTask();
    e.preventDefault();
  });

  document.addEventListener('click', (e) => {
    removeTask(e);
  });

});

function addNewTask() {
  let task = description.value;
  let newTaskLi = document.createElement('li');

  newTaskLi.innerHTML = `${task} <button>&#88;</button>`;;

  tasksList.appendChild(newTaskLi);
};

function removeTask(event) {
  if (event.target.tagName == "BUTTON") {
    event.target.parentElement.remove();
  }
}
