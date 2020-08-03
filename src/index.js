const taskInput = document.getElementById('new-task-description');
const todoListElement = document.getElementById('tasks');
const form = document.getElementById('create-task-form')
function addComment(){

  newLi = document.createElement('li');
  newTaskNode = document.createTextNode(taskInput.value);
  newLi.appendChild(newTaskNode);
  todoListElement.appendChild(newLi);

}





document.addEventListener("DOMContentLoaded", () => {
  // your code here
  form.addEventListener("submit", function() {
    event.preventDefault();
    addComment();
   
  });

});


// Deliverables:
// As a user, I should be able to type a task into the input field. x
// As a user, I should be able to click some form of a submit button. x
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated. x
// Note: While the example shows one working application of TaskLister Lite™️, yours can (and is encouraged to!) look however you like.

// Squelch a Default Action with Event.preventDefault x

// Stretch Deliverables:

// If you finish early, try to implement one or more of the following:

// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM