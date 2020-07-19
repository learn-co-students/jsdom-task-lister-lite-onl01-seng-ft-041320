document.addEventListener("DOMContentLoaded", () => {
});
let newTaskItem = document.getElementById('tasks')
let addTask = document.getElementById('create-task-form');
// on submit of addTask,
//   -get text content of newTask
//     -add that text to id="list" in a new <li>
// on click of button
//    - remove parent li
function makeTask(e) {
  e.preventDefault();
  let newTask = document.getElementById('new-task-description').value;
  let li = document.createElement('li')
  li.innerHTML = `${newTask} <button id='remove-button' data-description="${newTask}">X</button>`
  newTaskItem.appendChild(li);
  event.target.reset()
}

function removeItem(e) {
  if ( e.target.id === 'remove-button' ) {
     e.target.parentElement.remove();
  }
}

addTask.addEventListener('submit', makeTask)
newTaskItem.addEventListener('click', removeItem)
