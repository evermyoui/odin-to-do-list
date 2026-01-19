import { Storage } from "../logic/storage";
import { ProjectView } from "./project_view";
import Project from "../logic/project";

const STORAGE_KEY = "allProject";

export class ProjectManager {
    constructor(){
        this.storage = new Storage();
        const savedProjects = this.storage.load(STORAGE_KEY) || [];
        this.projects = savedProjects ? savedProjects.map(p => new Project(p.title, p.id, p.todos, p.date)) : [];
        this.view = new ProjectView('.project-ul'); 

        this.render();
    }
    render(){
        this.view.render(this.projects, {
            onDelete: (id) => this.delete(id),
            onAddToDo: (id) => window.todoManager?.show(id),
        });
    }
    delete(projectId){
        this.projects = this.projects.filter(p => p.id !== projectId);
        this.save();

        this.render();
    }
    save(){
        this.storage.save(STORAGE_KEY, this.projects);
    }
    add(title){
        const project = new Project(title);
        this.projects.push(project);
        this.save();
        this.render();

        return project;
    }
    get(projectId){
        return this.projects.find(p => p.id === projectId);
    }
    addToDoToProject(projectId, todo){
        const project = this.get(projectId);

        if (project){
            project.addTodo(todo);
            this.save();
        }
    }
}