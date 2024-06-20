const Status = {
  todo: "To do",
  inProgress: "In progress",
  done: "Done",
};
const toDoList = {
  list: {
    "create a new practice task": "to do",
    "make a bed": "In progress",
    "write a post": "to do",
    "feed the cat": "Done",
  },
  changeStatus(task, status) {
    if (task in toDoList.list) {
      this.list[task] = status;
    } else {
      console.log("No such task");
    }
  },

  addTask(task) {
    if (task in toDoList.list) {
      return;
    } else {
      this.list[task] = "to do";
    }
  },
  deleteTask(task) {
    delete toDoList.list[task];
  },
  showList() {
    let countToDo = 0;
    for (let task in toDoList.list) {
      if (toDoList.list[task] === "to do") {
        countToDo++;
        console.log("'" + task + "'" + ":" + "'" + toDoList.list[task] + "'");
      }
    }
    if (countToDo === 0) {
      console.log("-");
    }
    let countInProgress = 0;
    for (let task in toDoList.list) {
      if (toDoList.list[task] === "In progress") {
        countInProgress++;
        console.log("'" + task + "'" + ":" + "'" + toDoList.list[task] + "'");
      }
    }
    if (countInProgress === 0) {
      console.log("-");
    }

    let countDone = 0;
    for (let task in toDoList.list) {
      if (toDoList.list[task] === "Done") {
        countDone++;
        console.log("'" + task + "'" + ":" + "'" + toDoList.list[task] + "'");
      }
    }
    if (countDone === 0) {
      console.log("-");
    }
  },
};

console.log(toDoList.list);
function addTask(task, status) {
  if (task in toDoList.list) {
    console.log("В списке уже есть эта задача");
    return;
  } else {
    toDoList.list[task] = status;
  }
}
addTask("water plants", Status.inProgress);

console.log(toDoList.list);
addTask("water plants", Status.done);
toDoList.showList();
