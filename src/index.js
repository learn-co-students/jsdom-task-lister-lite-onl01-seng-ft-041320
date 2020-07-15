document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('[type=submit]').addEventListener("click", function(e) {
    e.preventDefault();
    addToList();
  })
  function addToList() {
    let text = document.getElementById('new-task-description').value;
    const list = document.getElementById('tasks');
    list.innerHTML = `<li class=${text}>${text} <button id=${text}>X</button></li>` + list.innerHTML;
    document.getElementById('new-task-description').value = "";
  }
  
});

document.querySelectorAll('button').forEach(button => button.addEventListener("click", function(e) {
  e.preventDefault();
  let text = e.target.id;
  document.querySelector(`li.${text}`).remove();
  e.target.remove();
}));