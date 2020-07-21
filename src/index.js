document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  let itemList = document.querySelector("#tasks");
  let xButton = document.createElement("button");
  xButton.innerText = "x";

  let placeholder = document.querySelector("#new-task-description");

  form.addEventListener("submit", (e)=> {
    let xButton = document.createElement("button");
    xButton.addEventListener("click", (e)=> {
      itemList.removeChild(e.target.parentNode);

    });
    xButton.innerText = "x";
    e.preventDefault();
    let listItem = document.createElement("li");
    listItem.innerText = e.target.elements[0].value + " ";
    itemList.appendChild(listItem);
    listItem.appendChild(xButton);
    placeholder.setAttribute("placeholder", "description");
    placeholder.value = "";
  });

});
