document.addEventListener("DOMContentLoaded", () => {
  //form and input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", () =>
    createNewTask(event, newTaskDescription)
  );
});

const createNewTask = (event, newTaskDescription) => {
  //stop form from trying to submit
  event.preventDefault();

  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};