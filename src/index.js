document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = document.getElementById('new-task-description').value;
    
    taskList.innerHTML += ` 
          <li> ${newTask}
            <button data-action='delete'>X</button>
          </li>
        `
    taskForm.reset();
  })

  taskList.addEventListener('click', function(event) {
    if (event.target.dataset.action === 'delete') {
      event.target.parentElement.remove();
    }
  })
});

