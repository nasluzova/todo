const STATUS = {
  todo: "To do",
  inProgress: "In progress",
  done: "Done",
};
const toDoList = {
  "create a new practice task": "To do",
  "make a bed": "To do",
  "write a post": "In progress",
  "feed the cat": "To do",
};

function changeStatus(task, status) {
  if ((task in toDoList) & (status === STATUS.done)) {
    toDoList[task] = "Done";

    return;
  }
  if ((task in toDoList) & (status === STATUS.todo)) {
    toDoList[task] = "To do";

    return;
  }
  if ((task in toDoList) & (status === STATUS.inProgress)) {
    toDoList[task] = "In progress";

    return;
  }
  if (task in toDoList) {
    console.log("status invalid");
  } else {
    showNoSuchTask();
  }
}

function addTask(task, status = "To do") {
  if (task in toDoList) {
    console.log("This task is already in list");
  }
  if (status === STATUS.done) {
    toDoList[task] = "Done";
    return;
  }
  if (status === STATUS.todo) {
    toDoList[task] = "To do";

    return;
  }
  if (status === STATUS.inProgress) {
    toDoList[task] = "In progress";

    return;
  }
  if (
    (status !== STATUS.inProgress) &
    (status !== STATUS.done) &
    (status !== STATUS.todo)
  ) {
    console.log("status invalid");
  } else {
    toDoList[task] = "To do";
  }
}

function deleteTask(task) {
  delete toDoList[task];
}

function showList() {
  let countToDo = 0;
  for (let task in toDoList) {
    if (toDoList[task] === "To do") {
      countToDo++;
    }
  }
  if (countToDo === 0) {
    console.log("-");
  }
  if (countToDo !== 0) {
    console.log("To do");
    for (let task in toDoList) {
      if (toDoList[task] === "To do") {
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
function showNoSuchTask() {
  console.log("no such task");
}
//changeStatus("probe", STATUS.done);
//addTask("probe");

showList();
console.log(toDoList);
