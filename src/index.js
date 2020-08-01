//variables
let taskDesc = document.getElementById("new-task-description")
let taskForm = document.getElementById("create-task-form")
let ul = document.getElementById("tasks")
let submitButton = document.getElementById("create-task-form")
let deleteButton = document.getElementById('destroy')
let first = ul.firstElementChild
let li = ul.firstElementChild

//function
function addTask(){

  let newTaskNode = document.createTextNode(taskDesc.value)
  let newLi = document.createElement("li")
  
  newLi.appendChild(newTaskNode)
  ul.append(newLi)
  if (ul) {
  let btn = document.createElement("BUTTON");
  btn.innerText = "X"
  btn.setAttribute("data-description", "destroy");
  newLi.appendChild(btn)}
 
};




//eventlistener
document.addEventListener("DOMContentLoaded", () => {
  submitButton.addEventListener("submit", function(){
    event.preventDefault();
    addTask()
  }); 
  if (ul){
    ul.addEventListener("click", (e) =>{
      if (e.target.nodeName === "BUTTON") {
       console.log(e.target.dataset.description);
      }
    });
    };
});




// As a user, I should be able to type a task into the input field. [X]
//As a user, I should be able to click some form of a submit button. [X]
//As a user, the task string that I provided should appear on the DOM after the submit button has been activated. [X]
