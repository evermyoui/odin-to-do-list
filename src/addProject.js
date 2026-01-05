// import Add_Project from "./uiProject";
import { uiDisplay } from "./project_controller";

export default function addProject(){
    const addProjectBtn = document.querySelector(".addProjectButton");
    const label = document.querySelector(".project-label");
    const input = document.querySelector("#project-title");

    let firstTap = true;

    const displayInput = (label, input)=>{
        label.style.display = "block";
        input.style.display = "block";
    }
    const clear = (label, input) => {
        label.style.display = "none";
        input.style.display = "none";
        input.value = "";
    }
    
    addProjectBtn.addEventListener("click", ()=>{
        if (firstTap){
            displayInput(label, input);
            firstTap = false;
        }else {
            uiDisplay(input.value);
            clear(label, input);
            firstTap = true;
        }
    });
}