//variables
let taskDesc = document.getElementById("new-task-description")
let taskForm = document.getElementById("create-task-form")
let ul = document.getElementById("tasks")
newLi = document.createElement("li")
//function
function addTask(){
  newTaskNode = document.createTextNode(taskDesc.value)
  newLi.appendChild(newTaskNode)
  ul.append(newLi)
};


//eventlistener
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  event.preventDefault();
});


// As a user, I should be able to type a task into the input field. [X]
//As a user, I should be able to click some form of a submit button. []
//As a user, the task string that I provided should appear on the DOM after the submit button has been activated. []
