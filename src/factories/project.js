import { format } from "date-fns";

export class Project {
    constructor(title, ){
        this.title = title.trim() || "Unnamed Project";
        this.todos = [];
        this.id = crypto.randomUUID();
        this.dateCreated = format(new Date(), 'dd-MMM-yyyy');
    }
}