import { format } from "date-fns";

export default class Project {
    constructor(title){
        this.id = crypto.randomUUID();
        this.title = title.trim() === "" ? "Unnamed Project" : title;
        // this.deletedTodo = [];
        this.todos = [];
        // this.doneTodo = [];
        this.date = format(new Date(), "yyyy-MM-dd");
        // this.isDone = false;
    }
    addTodo(todo){
        this.todos.push(todo);
    }
    // done(){
    //     this.doneTodo = this.todos.filter(todo => todo.status === "completed");
    //     this.todos = this.todos.filter(todo => todo.status === "pending");
    // }
    removeTodo(todoId){
        // this.deletedTodo = this.todos.filter(todo => todo.status === "deleted");
        // this.todos = this.todos.filter(todo => todo.status === "pending");
        this.todos.filter(t => t.id !== todoId);
    }
    getTodos(status){
        if (!status) return this.todos;
        return this.todos.filter(t => t.status === status);
    }
}