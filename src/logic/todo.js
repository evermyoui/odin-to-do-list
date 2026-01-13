import { format } from "date-fns";

export class Todo {
    constructor(title, description = "",notes = ""){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.dateCreated = format(new Date(), "yyyy-MM-dd");
        this.dueDate = null;
        this.priority = 2;
        this.status = "pending";
    }
    complete(){
        this.status = "completed";
    }
    delete(){
        this.status = "deleted";
    }
    changePriority(level){
        this.priority = PRIORITY_LEVELS[level];
    }
    setdueDate(date){
        this.dueDate = date;
    }
}

const PRIORITY_LEVELS = {
    'High' : 3,
    'Medium' : 2,
    'Low' : 1
};

// function getLevel(level){
//     let levels = new Map();
//     levels.set("High", 3);
//     levels.set("Medium", 2);
//     levels.set("Low", 1);

//     return levels.get(level);
// }