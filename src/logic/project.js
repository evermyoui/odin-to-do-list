import { format } from "date-fns";

export default class Project {
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title.trim() === "" ? "Unnamed Project" : title;
        this.todos = [];
        this.date = format(new Date(), "yyyy-MM-dd");
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    removeTodo(todoId){
        this.todos = this.todos.filter(t => t.id !== todoId);
    }
    getTodos(status){
        if (!status) return this.todos;
        return this.todos.filter(t => t.status === status);
    }
}