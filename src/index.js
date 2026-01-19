import {renderTemplate} from "./template.js"
import { ProjectManager } from "./dom/project_manager";
import { TodoManager } from "./dom/todo_manager";
import { AddProjectUI } from "./dom/addProjectUI";
import fetchQuote from "./quoteRandomizer";
import "./style.css";

function init(){
    renderTemplate();

    const projectManager = new ProjectManager();
    const todoManager = new TodoManager(projectManager);
    const addProjectUI = new AddProjectUI(projectManager);

    window.todoManager = todoManager;

    fetchQuote();
}

if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
}else {
    init();
}