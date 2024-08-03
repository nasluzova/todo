const STATUS = {
  todo: "To do",
  inProgress: "In progress",
  done: "Done",
};
const toDoList = {
  "create a new practice task": STATUS.todo,
  "make a bed": STATUS.todo,
  "write a post": STATUS.inProgress,
  "feed the cat": STATUS.done,
};

const changeStatus = (task, status) => {
  if (
    task in toDoList &&
    (status === STATUS.done ||
      status === STATUS.todo ||
      status === STATUS.inProgress)
  ) {
    assignStatus(task, status);
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
  if (result === true) {
    //if (task in toDoList) {
    console.log("This task is already in list");
    return;
  }
  if (
    status === STATUS.done ||
    status === STATUS.todo ||
    status === STATUS.inProgress
  ) {
    assignStatus(task, status);
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
  showStatusTaskList(STATUS.todo);
  showStatusTaskList(STATUS.inProgress);
  showStatusTaskList(STATUS.done);
};

const showNoSuchTask = () => {
  console.log("no such task");
};
const assignStatus = (task, status) => {
  toDoList[task] = status;
};

const checkIfTaskInList = (task) => {
  if (task in toDoList) {
    return true;
  } else {
    return false;
  }
};
const showStatusTaskList = (status) => {
  let count = 0;
  for (let task in toDoList) {
    if (toDoList[task] === status) {
      count++;
    }
  }
  console.log(status);
  if (count === 0) {
    console.log("-");
  }
  if (count !== 0) {
    for (let task in toDoList) {
      if (toDoList[task] === status) {
        console.log("`" + task + "`");
      }
    }
  }
};
//changeStatus("feed the cat", STATUS.inProgress);
//changeStatus("make a bed", STATUS.inProgress);
addTask("probe", "Done1");

//addTask("probe", STATUS.done);
//deleteTask("make a bed");
deleteTask("write a post");
showList();
console.log(toDoList);
