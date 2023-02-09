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
                        <button class="remove" data-id="${index}" onclick="deleteTodo(event)">
                            <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete">
                            <i class="fa fa-check-circle"></i>
                        </button>
                    </div>
                </li>
            `;
        }, "");
        return content;
    }
}