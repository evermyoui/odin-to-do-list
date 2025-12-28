import Add_Project from "./uiProject";

export default function addProject(){
    const addProjectBtn = document.querySelector(".addProjectButton");
    const label = document.querySelector(".project-label");
    const input = document.querySelector("#project-title");

    const project = new Add_Project();
    let firstTap = true;

    addProjectBtn.addEventListener("click", ()=>{
        if (firstTap){
            project.displayInput(label, input);
            firstTap = false;
        }else {
            project.uiDisplay(input.value);
            project.clear(label, input);
            firstTap = true;
        }
    });
}