const toDoList = {
  list: {
    "create a new practice task": "In progress",
    "make a bed": "Done",
    "write a post": "to do",
  },
  changeStatus(task, status) {
    for (task in toDoList.list) {
      this.list[task] = status;
    }
  },
  addTask(task) {
    this.list[task] = "to do";
  },
  deleteTask(task) {
    delete toDoList.list[task];
  },
  showList() {
    if (task in toDoList.list && toDoList.list[task] == "to do") {
      console.log(task + ":" + toDoList.list[task]);
      if (task in toDoList.list && toDoList.list[task] == "In progress") {
        console.log(task + ":" + toDoList.list[task]);
      }
    }
  },
};
toDoList.showList();
toDoList.addTask("Do the dishes");
toDoList.addTask("Probe");
toDoList.deleteTask("Probe");
toDoList.changeStatus("make a bed", "to do");
