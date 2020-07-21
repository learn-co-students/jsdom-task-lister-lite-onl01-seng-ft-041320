document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const list = new TaskList();

  const form = document.getElementById("create-task-form");
  const newTaskItem = document.getElementById("new-task-description");

  const taskUl = document.getElementById("tasks");

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    list.createNewTask(newTaskItem.value);
    event.target.reset();
    taskUl.innerHTML = list.buildTasksView();
  });
});
