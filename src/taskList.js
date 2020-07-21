class TaskList {
    constructor() {
        this.tasks = [];
    }

    createNewTask(desc) {
        const newTask = new Task(desc);
        this.tasks.push(newTask);
    }

    buildTasksView() {
        return this.tasks.map(function(task) {
            return task.createLine();
        }).join("");
    }
}