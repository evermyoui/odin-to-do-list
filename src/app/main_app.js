import { 
    displayCard, 
    displayEnterProject,
    displayTodo, 
} from "../dom/display_dom";
import { Todo } from "../factories/todo";
import { 
    projectDependencies 
} from "../managers/project_manager";


export class Main_App {
    constructor(){   
    }
    homePage(){
        displayCard();
        displayEnterProject();
        this.addAndCancelButtons();
        this.eachProjectClicks();
    }
    addAndCancelButtons(){
        let isConfirm = false;

        const addBtn = document.querySelector('#project-add-btn');
        const cancelBtn = document.querySelector('#cancel-add-project-btn');
        const projInput = document.querySelector("#project-input-title");
        const container = document.querySelector(".container");

        addBtn.addEventListener("click" ,()=> {
            if (!isConfirm){
                cancelBtn.style.display = `block`;
                projInput.style.display = `block`;
                addBtn.textContent = "Confirm Add Project";
                isConfirm = true;
            }else {
                projectDependencies.createProject(projInput.value);
                container.innerHTML = '';
                this.homePage();
                console.log(projectDependencies.getProjects());
                cancelBtn.style.display = `none`;
                projInput.style.display = `none`;
                isConfirm = false;
                addBtn.textContent = "Add Project";
            }
        });
        cancelBtn.addEventListener("click", ()=> {
            cancelBtn.style.display = `none`;
            projInput.style.display = `none`;
            addBtn.textContent = `Add Project`;
            isConfirm = false;
        })
    }
    eachProjectClicks(){
        document.querySelectorAll(".projects").forEach(project => {
            const projId = project.dataset.id;
            const deleteProj = project.querySelector(`[id$=-delete-btn]`);
            const title = project.querySelector('[id$="-title"]');

            const projects = projectDependencies.getProjects();
            const defaultId = projects[0].id;

            if (defaultId === projId){
                deleteProj.style.display = "none";
            }

            title.addEventListener('click', ()=> {
                //expand todo
                this.expandTodo(projId);
            });
            //delete project
            deleteProj.addEventListener("click", () => {
                console.log("delete");
                projectDependencies.deleteProject(projId);
                console.log(projectDependencies.getProjects());
                document.querySelector(".container").innerHTML = "";
                this.homePage();
            });
        });
    }
    // I want to put the expanded todo before the delete button
    expandTodo(projectId){
        //hide all todos
        document.querySelectorAll('[id^="todo-expand-"]').forEach(div => {
            div.classList.add("hidden");
        })

        const todoDiv = document.querySelector(`#todo-expand-${projectId}-div`);
        //find selected project
        const project = projectDependencies.getProjects().find(p => p.id === projectId);
        if (!project) return;
        
        //clear container
        todoDiv.innerHTML = '';
        todoDiv.classList.remove('hidden');
        //if empty show message
        if(project.todos.length === 0) {
            console.log("No Todo");
        }

        //render all todo
        project.todos.forEach(todo => {
            displayTodo(projectId, todo);
            console.log(document.querySelector(`#todo-card-${todo.id}-div`));
        });
    }
}