import { format } from "date-fns";
export default class Project {
    constructor(title){
        this.title = title.trim() === "" ? "Unnamed Project" : title;
        this.deletedTodo = [];
        this.todo = [];
        this.doneTodo = [];
        this.id = crypto.randomUUID();
        this.date = format(new Date(), "yyyy-MM-dd");
        this.isDone = false;
    }
    addTodo(todo){
        this.todo.push(todo);
    }
    done(){
        this.doneTodo = this.todo.filter(todo => todo.status === "completed");
        this.todo = this.todo.filter(todo => todo.status === "pending");
    }
    deleteTodo(){
        this.deletedTodo = this.todo.filter(todo => todo.status === "deleted");
        this.todo = this.todo.filter(todo => todo.status === "pending");
    }
}