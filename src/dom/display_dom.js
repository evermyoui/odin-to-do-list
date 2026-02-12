import { Project } from "../factories/project";
import { projectDependencies } from "../managers/project_manager";
import { addTextToElem, loadElemToContainer } from "./call_loaders";

//sample projects
const project = new Project("Project 1");
projectDependencies.projects.push(project);
const project2 = new Project("Project 2");
projectDependencies.projects.push(project2);
console.log(projectDependencies);

export function displayCard(){
    loadElemToContainer(".container", "div", "project-card");
    projectDependencies.projects.forEach(p => {
        loadElemToContainer("#project-card", "div", `project-${p.id}`);
        loadElemToContainer(`#project-${p.id}`, "p", `project-${p.id}-title`);
        addTextToElem(`#project-${p.id}-title`, p.title);
        loadElemToContainer(`#project-${p.id}`, "p", `project-${p.id}-date`);
        addTextToElem(`#project-${p.id}-date`, p.dateCreated);
    });
    loadElemToContainer(`#project-card`, 'button', 'project-add-btn');
    addTextToElem(`#project-add-btn`, "Add Project");
}