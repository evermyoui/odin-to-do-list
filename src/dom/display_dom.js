import { projectDependencies } from "../managers/project_manager";
import { 
    addAttributeToElem, 
    addTextToElem, 
    loadElemToContainer 
} from "./call_loaders";

export function displayCard(){
    const projectSaved = projectDependencies.getProjects();
    loadElemToContainer(".container", "div", "project-card");
    projectSaved.forEach(p => {
        loadElemToContainer("#project-card", "div", `project-${p.id}`);
        loadElemToContainer(`#project-${p.id}`, "p", `project-${p.id}-title`);
        addTextToElem(`#project-${p.id}-title`, p.title);
        loadElemToContainer(`#project-${p.id}`, "p", `project-${p.id}-date`);
        addTextToElem(`#project-${p.id}-date`, p.dateCreated);
        addAttributeToElem(`#project-${p.id}`, "data-id", p.id);
        addAttributeToElem(`#project-${p.id}`, 'class', 'projects');

        loadElemToContainer(`#project-${p.id}`, 'div', `todo-expand-${p.id}-div`);

        loadElemToContainer(`#project-${p.id}`, 'button', `project-${p.id}-delete-btn`);
        addTextToElem(`#project-${p.id}-delete-btn`, "Delete Project");
    });
    loadElemToContainer(`#project-card`, 'button', 'project-add-btn');
    addTextToElem(`#project-add-btn`, "Add Project");
}
export function displayEnterProject(){
    loadElemToContainer('#project-card', 'button', 'cancel-add-project-btn');
    addTextToElem(`#cancel-add-project-btn`, "Cancel");
    addAttributeToElem("#cancel-add-project-btn", `style`, `display: none;`);
    
    loadElemToContainer(`#project-card`, "input", `project-input-title`);
    addAttributeToElem(`#project-input-title`, "type", "text");
    addAttributeToElem(`#project-input-title`, "placeholder", "Enter Project Title");
    addAttributeToElem("#project-input-title", `style`, `display: none;`);
}