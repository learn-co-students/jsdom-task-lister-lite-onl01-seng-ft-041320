document.addEventListener("DOMContentLoaded", () => {
	// your code here
	document.addEventListener('submit', event => {
		// prevent page refresh on form submission
		createNewTask();
		event.preventDefault();
	});

	document.addEventListener('click',function(e){
		removeTask(e);
	});

	function createNewTask() {
		let input = document.getElementById("new-task-description").value;
		let myList = document.getElementsByTagName('ul')[0]
		myList.innerHTML += '<li>' + input + ' <button onclick="">&#88;</button> </li>';
		event.target.reset()
	}

	function removeTask(e) {
		if (e.target.tagName == "BUTTON") {
			e.target.parentElement.remove();}
	}
});
