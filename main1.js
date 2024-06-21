const Status = {
  todo: "To do",
  inProgress: "In progress",
  done: "Done",
};
const toDoList = {
  list: {
    "create a new practice task": "to do",
    "make a bed": "to do",
    "write a post": "In progress",
    "feed the cat": "to do",
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
      }
    }
    if (countToDo === 0) {
      console.log("-");
    }
    if (countToDo !== 0) {
      console.log("To do");
      for (let task in toDoList.list) {
        if (toDoList.list[task] === "to do") {
          console.log("'" + task + "'");
        }
      }
    }
    let countInProgress = 0;
    for (let task in toDoList.list) {
      if (toDoList.list[task] === "In progress") {
        countInProgress++;
      }
    }
    if (countInProgress === 0) {
      console.log("-");
    }
    if (countInProgress !== 0) {
      console.log("In progress");
      for (let task in toDoList.list) {
        if (toDoList.list[task] === "In progress") {
          console.log("'" + task + "'");
        }
      }

      let countDone = 0;
      for (let task in toDoList.list) {
        if (toDoList.list[task] === "Done") {
          countDone++;
        }
      }
      if (countDone === 0) {
        console.log("-");
      }
      if (countDone !== 0) {
        console.log("Done");
        for (let task in toDoList.list) {
          if (toDoList.list[task] === "Done") {
            console.log("'" + task + "'");
          }
        }
      }
    }
  },
};
toDoList.showList();
