import { Project } from "../factories/project";

export const projectDependencies = (() => {
    const defaultProject = new Project("default");
    const projects = [defaultProject];

    return {
        defaultProject,
        projects
    }
})();

export const createProject = (title) => {
    const project = new Project(title);
    projectDependencies.projects.push(project);
    return project;
}

export const addTodoToProject = (projId, todo) => {
    const project = projectDependencies.projects.find(p => p.id === projId);
    if (!project) return;
    project.todos.push(todo);
    return project;
}