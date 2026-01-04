class Todo {
    constructor(title, description,notes, dateCreated){
        this.title = title;
        this.description = description;
        this.dateCreated = dateCreated;
        this.dueDate = {due: false, date: this.dateCreated};
        this.priority = 1;
        this.notes = notes;
        this.status = "pending";
    }
    markAsDone(){
        this.status = "completed";
    }
    markAsDeleted(){
        this.status = "deleted";
    }
    changePriority(level){
        this.priority = getLevel(level);
    }
}

function getLevel(level){
    let levels = new Map();
    levels.set("High", 3);
    levels.set("Medium", 2);
    levels.set("Low", 1);

    return levels.get(level);
}