class AllProjects{
    constructor(){
        this.allProject = getLocalStorage("allProject") ||[];
        this.deletedProject = []; 
    }
    addProject(project){
        this.allProject.push(project);
    }
    getProject(index){
        return this.allProject[index];
    }
    deleteProject(projectID){
        const index = this.allProject.findIndex(project => project.id === projectID);
        if (index === -1) return;
        this.deletedProject.push(this.allProject[index]);
        this.allProject = this.allProject.filter(project => project.id !== projectID);
    }
}