document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  let newTask = document.getElementById("new-task-description")
  let tasks = document.getElementById("tasks")

  form.addEventListener("submit", (event) => {
    let li = document.createElement("li")
    li.innerText = newTask.value
    tasks.appendChild(li)

    event.preventDefault();
    window.history.back();
  });

});
