import { Todo } from "./todo.js";
import { TodoList } from "./todoList.js";

//tao danh sach to do
let tdList = new TodoList();
//danh sach to do da hoan thanh
let completeList = new TodoList();
// them noi dung vao todolist
const add_Todo = () => {
  let input = document.getElementById("newTask").value;
  if (input != "") {
    let todo = new Todo(input, "todo");
    tdList.todoList.push(todo);
  }
  //clear noi dung trong thanh input
  document.getElementById("newTask").value = "";
};

//xu ly su kien click vao nut add (+)
document.getElementById("addItem").addEventListener("click", () => {
  add_Todo();
  let ulTodo = document.getElementById("todo");
  showTodo(ulTodo);
});
//hien thi cac todo list
const showTodo = (ulTodo) => {
  ulTodo.innerHTML = tdList.renderTodo();
};
const showComplete = (ulcomplete) => {
  ulcomplete.innerHTML = completeList.renderTodo();
};

const deleteTodo = (event) => {
  let indexTodo = event.currentTarget.getAttribute("data-id");
  let statusTodo = event.currentTarget.getAttribute("data-status");
  if (statusTodo == "todo") {
    tdList.removeTodo(indexTodo);
    let ulTodo = document.getElementById("todo");
    showTodo(ulTodo);
  } else if (statusTodo == "completed") {
    completeList.removeTodo(indexTodo);
    let ulcompleted = document.getElementById("completed");
    showComplete(ulcompleted);
  } else {
    alert("Cannot delete cause status is invalid")
  }
};
window.deleteTodo = deleteTodo;

const checkTodo = (e) => {
  let id = e.currentTarget.getAttribute("data-id");
  let status = e.currentTarget.getAttribute("data-status");
  let todoText = e.currentTarget.getAttribute("data-text");
  if (status == "todo") {
    let completeTodo = new Todo(todoText, "completed");

    tdList.removeTodo(id);
    completeList.addTodo(completeTodo);

    moveTodo();
  } else if (status == "completed") {
    let newTodo = new Todo(todoText, "todo");

    tdList.addTodo(newTodo);
    completeList.removeTodo(id);

    moveTodo();
  } else {
    alert("Cannot remove cause status is invalid")
  }
};
window.checkTodo = checkTodo;

const moveTodo = () => {
  let ulTodo = document.getElementById("todo");
  let ulcompleted = document.getElementById("completed");

  showTodo(ulTodo);
  showComplete(ulcompleted);
};

const sortASC = () => {
    tdList.sortTodoList(false);
    completeList.sortTodoList(false);
    moveTodo();
}
window.sortASC = sortASC;

const sortDES = () => {
    tdList.sortTodoList(true);
    completeList.sortTodoList(true);
    moveTodo();
}
window.sortDES = sortDES;
