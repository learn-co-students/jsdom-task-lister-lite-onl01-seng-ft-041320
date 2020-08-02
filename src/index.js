//variables
let taskDesc = document.getElementById("new-task-description")
let taskForm = document.getElementById("create-task-form")
let ul = document.getElementById("tasks")
let submitButton = document.getElementById("create-task-form")
var deleteButton = document.getElementById("destroy")


//function
function addTask(){

  let newTaskNode = document.createTextNode(taskDesc.value)
  let newLi = document.createElement("li")
  
  newLi.appendChild(newTaskNode)
  ul.append(newLi)
  
  let btn = document.createElement("BUTTON");
  btn.innerText = "X"
  btn.setAttribute("data-description", "destroy");
  btn.setAttribute("id", `${taskDesc.value}`);
  newLi.appendChild(btn)
 
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
       let finish = e.target
       let finished = (finish).parentNode
        alert(`You removed ${finish.id} from the list`)
       
       finished.parentNode.removeChild(finished);
      }
    });
    };
});




// As a user, I should be able to type a task into the input field. [X]
//As a user, I should be able to click some form of a submit button. [X]
//As a user, the task string that I provided should appear on the DOM after the submit button has been activated. [X]
// As a user, the button that I click next to the task should be able to delete once completed [X]
// As a user, the button that I click next to the task should provide a popup alert [X]
// As a user, that popup alert should tell me which task I am delteing [X]
