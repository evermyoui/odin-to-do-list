import Project from "./project_class";
export default class AllProjects{
    constructor(){
        this.allProject = JSON.parse(localStorage.getItem("allProject")) || [];
        this.deletedProject = []; 
    }
    addProject(title){
        const project = new Project(title);
        this.allProject.push(project);
        return project;
    }
    deleteProject(projectID){
        const index = this.allProject.findIndex(project => project.id === projectID);
        if (index === -1) return;
        this.deletedProject.push(this.allProject[index]);
        this.allProject.splice(index, 1);
        settingLocalStorage("allProject", this.allProject);
    }
}
export function settingLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

// export default class AllProjects{
//     constructor(storage){
//         this.storage = storage;
//         this.allProject = this.storage.load("allProject");
//     }

//     addProject(title){
//         const project = new Project(title);
//         this.allProject.push(project);
//         this.sync();
//         return project;
//     }

//     deleteProject(projectID){
//         this.allProject = this.allProject.filter(p => p.id !== projectID);
//         this.sync();
//     }
//     sync(){
//         this.storage.save("allProject", this.allProject);
//     }
// }