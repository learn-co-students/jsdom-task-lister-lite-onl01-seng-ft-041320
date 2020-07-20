document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    document.getElementById("list").innerHTML += (document.getElementById("new-task-description").value) + "<br>";
    event.preventDefault();
  }, false);
});
