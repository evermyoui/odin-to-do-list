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
            project.addTitle(input.value);
            project.clear(label, input);
            firstTap = true;
        }
    });
}
class Add_Project {
    displayInput(label, input){
        label.style.display = "block";
        input.style.display = "block";
    }
    addTitle(title){
        if (!title.trim()){
            title = `Unnamed Project`;
        }
        console.log(`Project ${title} has been saved`);
    }
    clear(label, input){
        label.style.display = "none";
        input.style.display = "none";
        input.value = "";
    }
}