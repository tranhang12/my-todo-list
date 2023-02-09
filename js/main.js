import { Todo } from "./todo.js";
import { TodoList } from "./todoList.js";

//tao danh sach to do
let tdList = new TodoList();

// them noi dung vao todolist
const add_Todo = () => {
    let input = document.getElementById("newTask").value;
    if (input != "") {
        let todo = new Todo(input, "todo");
        tdList.todoList.push(todo);
    }
    //clear noi dung trong thanh input
    document.getElementById("newTask").value = "";
}

//xu ly su kien click vao nut add (+)
document.getElementById("addItem").addEventListener("click", () => {
    add_Todo();
    let ulTodo = document.getElementById("todo");
    showTodo(ulTodo);

});
//hien thi cac todo list
const showTodo = (ulTodo) => {
    ulTodo.innerHTML = tdList.renderTodo();
}

const deleteTodo = (event) => {
    let indexTodo = event.currentTarget.getAttribute("data-id");

    tdList.removeTodo(indexTodo);
    console.log(tdList);
    let ulTodo = document.getElementById("todo");
    showTodo(ulTodo);
    // console.log(indexTodo);
}
window.deleteTodo = deleteTodo;
