document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("submit", () => {
  addTask(document.getElementById("new-task-description").value);
  event.preventDefault();
});

function addTask(description){
  let tasks = document.getElementById("tasks");
  let newTask = document.createElement("li")
  newTask.innerText = description;
  tasks.append(newTask);
};