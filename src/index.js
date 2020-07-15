document.addEventListener("DOMContentLoaded", () => {
	// your code here
	document.addEventListener('submit', event => {
		// prevent page refresh on form submission
		event.preventDefault();
		let input = document.getElementById("new-task-description").value;
		let myList = document.getElementsByTagName('ul')[0]
		const listItem = document.createElement("li");
		const listValue = document.createTextNode(input);
		listItem.appendChild(listValue);
		myList.appendChild(listItem);
		event.target.reset()
	});
});
