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

const changeStatus = (task, status) => {
  if (task in toDoList && status === STATUS.done) {
    toDoList[task] = STATUS.done;

    return;
  }
  if (task in toDoList && status === STATUS.todo) {
    toDoList[task] = STATUS.todo;

    return;
  }
  if (task in toDoList && status === STATUS.inProgress) {
    toDoList[task] = STATUS.inProgress;

    return;
  }
  if (task in toDoList) {
    console.log("status invalid");
  } else {
    showNoSuchTask();
  }
};

const addTask = (task, status = "To do") => {
  if (task in toDoList) {
    console.log("This task is already in list");
  }
  if (status === STATUS.done) {
    toDoList[task] = STATUS.done;
    return;
  }
  if (status === STATUS.todo) {
    toDoList[task] = STATUS.todo;

    return;
  }
  if (status === STATUS.inProgress) {
    toDoList[task] = STATUS.inProgress;

    return;
  }
  if (
    status !== STATUS.inProgress &&
    status !== STATUS.done &&
    status !== STATUS.todo
  ) {
    console.log("status invalid");
  }
};
const deleteTask = (task) => {
  delete toDoList[task];
};

const showList = () => {
  //function showList() {
  let countToDo = 0;
  for (let task in toDoList) {
    if (toDoList[task] === STATUS.todo) {
      countToDo++;
    }
  }
  if (countToDo === 0) {
    console.log("-");
  }
  if (countToDo !== 0) {
    console.log("To do");
    for (let task in toDoList) {
      if (toDoList[task] === STATUS.todo) {
        console.log("'" + task + "'");
      }
    }
  }
  let countInProgress = 0;
  for (let task in toDoList) {
    if (toDoList[task] === STATUS.inProgress) {
      countInProgress++;
    }
  }
  if (countInProgress === 0) {
    console.log("-");
  }
  if (countInProgress !== 0) {
    console.log("In progress");
    for (let task in toDoList) {
      if (toDoList[task] === STATUS.inProgress) {
        console.log("'" + task + "'");
      }
    }
  }

  let countDone = 0;
  for (let task in toDoList) {
    if (toDoList[task] === STATUS.done) {
      countDone++;
    }
  }
  if (countDone === 0) {
    console.log("-");
  }
  if (countDone !== 0) {
    console.log("Done");
    for (let task in toDoList) {
      if (toDoList[task] === STATUS.done) {
        console.log("'" + task + "'");
      }
    }
  }
};
const showNoSuchTask = () => {
  //function showNoSuchTask() {
  console.log("no such task");
};
changeStatus("make a bed", STATUS.done);
addTask("probe");
//deleteTask("make a bed");
showList();
console.log(toDoList);
