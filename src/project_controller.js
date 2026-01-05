import AllProjects, {settingLocalStorage} from "./allProject_class";

const all_project = new AllProjects();

export function uiDisplay(projTitle){
    const newProj = addproj(projTitle);
    createProjectElements(newProj);
}
export function createProjectElements({title, date, id}){
    const projectUl = document.querySelector(".project-ul");
    const card = document.createElement("div");
    card.classList.add("card");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = title;
    const p1 = document.createElement("p");
    p1.textContent = date;
    const div = document.createElement("div");
    const addBtn = document.createElement("button");
    addBtn.classList.add("add-button");
    addBtn.textContent = "Add To-do";
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.textContent = "Delete";
    li.append(p, p1);
    div.append(addBtn, deleteBtn);
    card.append(li, div);
    projectUl.appendChild(card);

    all_project.allProject.length !== 0 ? projectUl.style.display = "flex" : projectUl.style.display = "none";
    addBtn.addEventListener("click", ()=>{
            
    })
    deleteBtn.addEventListener("click", ()=> {
        all_project.deleteProject(id);
        all_project.allProject.length !== 0 ? projectUl.style.display = "flex" : projectUl.style.display = "none";
        card.remove();
    })
}
function addproj(projTitle){
    const project = all_project.addProject(projTitle);
    settingLocalStorage("allProject", all_project.allProject);
    return project;
}