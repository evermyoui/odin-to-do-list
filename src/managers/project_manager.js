import { Project } from "../factories/project";
import { Storage } from "../factories/storage";

const storage = new Storage();

export const projectDependencies = (() => {
    let projects = [];

    const init = () => {
        const saved = storage.load();

        if (saved.length = 0){
            const defaultProject = new Project("default");
            const projects = [defaultProject];
            storage.save(projects);
        }else {
            projects.map(p => {
                const project = new Project(p.title);
                project.id = p.id;
                project.todos = p.todos || [];
                project.dateCreated = p.dateCreated;
                return project;
            })
        }
    }
    const getProjects = ()=> projects;

    const createProject = (title) => {
        const project = new Project(title);
        projects.push(project);
        storage.save(projects);
        return project;
    }

    const deleteProject = (projectId) => {
        if (projectId === projects[0].id) return;
        const index = projects.findIndex(project => project.id === projectId);
        if (index ===-1) return;
        projects.splice(index,1);
        storage.save(projects);
    }

    const addTodoToProject = (projId, todo) => {
        const project = projects.find(p => p.id === projId);
        if (!project) return;
        project.todos.push(todo);
        storage.save(projects);
        return project;
    }

    return {
        init,
        getProjects,
        createProject,
        deleteProject,

    }
})();

export const addTodoToProject = (projId, todo) => {
    const project = projectDependencies.projects.find(p => p.id === projId);
    if (!project) return;
    project.todos.push(todo);
    return project;
}