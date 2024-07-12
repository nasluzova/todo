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
    assignStatusDone(task);
    return;
  }
  if (task in toDoList && status === STATUS.todo) {
    assignStatusTodo(task);

    return;
  }
  if (task in toDoList && status === STATUS.inProgress) {
    assignStatusInProgress(task);

    return;
  }

  checkIfTaskInList(task);
  let result = checkIfTaskInList(task);
  if (result === 1) {
    console.log("status invalid");
    return;
  }
  if (result === 0) {
    console.log("no such task");
    return;
  }
};

const addTask = (task, status = "To do") => {
  checkIfTaskInList(task);
  let result = checkIfTaskInList(task);
  if (result === 1) {
    //if (task in toDoList) {
    console.log("This task is already in list");
    return;
  }
  if (status === STATUS.done) {
    assignStatusDone(task);
    return;
  }
  if (status === STATUS.todo) {
    assignStatusTodo(task);

    return;
  }
  if (status === STATUS.inProgress) {
    assignStatusInProgress(task);

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
const assignStatusDone = (task) => {
  toDoList[task] = STATUS.done;
};
const assignStatusTodo = (task) => {
  toDoList[task] = STATUS.todo;
};
const assignStatusInProgress = (task) => {
  toDoList[task] = STATUS.inProgress;
};
const checkIfTaskInList = (task) => {
  if (task in toDoList) {
    return 1;
  } else {
    return 0;
  }
};
changeStatus("make a bed", STATUS.inProgress);
//changeStatus("make a bed", STATUS.inProgress);
//addTask("robe", STATUS.inProgress);

//addTask("probe", STATUS.done);
//deleteTask("make a bed");
showList();
console.log(toDoList);
console.log(result);
