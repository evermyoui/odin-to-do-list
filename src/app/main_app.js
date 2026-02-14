import { is } from "date-fns/locale";
import { 
    displayCard, 
    displayEnterProject, 
} from "../dom/display_dom";

export class Main_App {
    constructor(){   
    }
    homePage(){
        displayCard();
        displayEnterProject();
        addAndCancelButtons();
    }
}
function addAndCancelButtons(){
    let isConfirm = false;

    const addBtn = document.querySelector('#project-add-btn');
    const cancelBtn = document.querySelector('#cancel-add-project-btn');
    const projInput = document.querySelector("#project-input-title");
    addBtn.addEventListener("click" ,()=> {
        if (!isConfirm){
            cancelBtn.style.display = `block`;
            projInput.style.display = `block`;
            addBtn.textContent = "Confirm Add Project";
            isConfirm = true;
        }else {
            console.log("Hi from confirm");
            cancelBtn.style.display = `none`;
            projInput.style.display = `none`;
            isConfirm = false;
        }
    });
    cancelBtn.addEventListener("click", ()=> {
        cancelBtn.style.display = `none`;
        projInput.style.display = `none`;
        addBtn.textContent = `Add Project`;
        isConfirm = false;
    })
}