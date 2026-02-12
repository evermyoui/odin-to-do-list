export class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.id = crypto.randomUUID();
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}