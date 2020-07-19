document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");
  
  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  i++;
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTaskDelete.innerHTML = "Delete";

  newTask.innerText = newTaskDescription.value;
  newTask.appendChild(newTaskDelete);

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};


