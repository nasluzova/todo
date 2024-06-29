const Status = {
  todo: "To do",
  inProgress: "In progress",
  done: "Done",
};
const toDoList = {
  "create a new practice task": "to do",
  "make a bed": "to do",
  "write a post": "In progress",
  "feed the cat": "to do",
};

function changeStatus(task, status) {
  if (task in toDoList) {
    toDoList[task] = status;
  } else {
    console.log("No such task");
  }
}

function addTask(task) {
  if (task in toDoList) {
    return;
  } else {
    toDoList[task] = "to do";
  }
}

function deleteTask(task) {
  delete toDoList[task];
}

function showList() {
  let countToDo = 0;
  for (let task in toDoList) {
    if (toDoList[task] === "to do") {
      countToDo++;
    }
  }
  if (countToDo === 0) {
    console.log("-");
  }
  if (countToDo !== 0) {
    console.log("To do");
    for (let task in toDoList) {
      if (toDoList[task] === "to do") {
        console.log("'" + task + "'");
      }
    }
  }
  let countInProgress = 0;
  for (let task in toDoList) {
    if (toDoList[task] === "In progress") {
      countInProgress++;
    }
  }
  if (countInProgress === 0) {
    console.log("-");
  }
  if (countInProgress !== 0) {
    console.log("In progress");
    for (let task in toDoList) {
      if (toDoList[task] === "In progress") {
        console.log("'" + task + "'");
      }
    }

    let countDone = 0;
    for (let task in toDoList) {
      if (toDoList[task] === "Done") {
        countDone++;
      }
    }
    if (countDone === 0) {
      console.log("-");
    }
    if (countDone !== 0) {
      console.log("Done");
      for (let task in toDoList) {
        if (toDoList[task] === "Done") {
          console.log("'" + task + "'");
        }
      }
    }
  }
}

showList();
addTask("water plants");
changeStatus("water plants", "Done");
deleteTask("water plants");
showList();
