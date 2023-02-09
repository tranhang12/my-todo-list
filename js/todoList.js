export class TodoList {
    constructor() {
        this.todoList = [];
    }
    addTodo(todo) {
        this.todoList.push(todo);
    }
    removeTodo(index) {
        this.todoList.splice(index, 1);
    }
    renderTodo() {
        let content = this.todoList.reduceRight((contentTodo, item, index) => {
            return contentTodo += `
                <li>
                    <span>${item.todo}</span>
                    <div class="buttons">
                        <button class="remove" data-id="${index}" data-status="${item.status}" onclick="deleteTodo(event)">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete" data-id="${index}" data-text="${item.todo}" data-status="${item.status}" onclick="checkTodo(event)">
                            <i class="fa fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
        }, "");
        return content;
    }
    sortTodoList(isDESC) {
        this.todoList.sort((_todo, _nextTodo) => {
            const textA = _todo.todo.toLowerCase();
            const textB = _nextTodo.todo.toLowerCase();
            return textB.localeCompare(textA);
        })
        if(isDESC) {
            this.todoList.reverse();
        }
    }
}