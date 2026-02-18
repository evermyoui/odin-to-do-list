import { 
    displayCard, 
    displayEnterProject, 
} from "../dom/display_dom";
import { createProject, deleteProject, projectDependencies } from "../managers/project_manager";

export class Main_App {
    constructor(){   
    }
    homePage(){
        displayCard();
        displayEnterProject();
        this.addAndCancelButtons();
        this.eachProjectClicks(); // not working.
    }
    clearDisplay(){

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
                createProject(projInput.value);
                container.innerHTML = '';
                this.homePage();
                console.log(projectDependencies);
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
            const title = project.querySelector('[id$="-title"]');
            title.addEventListener('click', ()=> {
                //expand todo
            });
            //delete project
            const deleteProj = project.querySelector(`[id$=-delete-btn]`);
            deleteProj.addEventListener("click", () => {
                console.log("delete");
                deleteProject(projId);
                console.log(projectDependencies);
                document.querySelector(".container").innerHTML = "";
                this.homePage();
            });
        });
    }
}