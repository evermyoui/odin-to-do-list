export default function homeDisplay(){
    const container = document.querySelector(".container");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-class");

    const projectH2 = document.createElement("h2");
    projectH2.textContent = `All Projects`;

    const projectUl = document.createElement("ul");
    projectUl.classList.add("project-ul");

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("buttonDiv");

    const label = document.createElement("label");
    label.classList.add("project-label");
    label.htmlFor = "project-title";
    label.textContent = `Add Project`;
    label.style.display = "none";

    const input = document.createElement("input");
    input.type = `text`;
    input.name = `project-title`;
    input.id = `project-title`;
    input.placeholder = `Enter Project Title`;
    input.style.display = "none";

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("addProjectButton");
    addProjectBtn.textContent = `Add Project`;

    const todolistDiv = document.createElement("div");
    todolistDiv.classList.add("to-do-list-class");

    const todoH2 = document.createElement("h2");
    todoH2.textContent = `To Do List`;

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-class");

    const dueDiv = document.createElement("div");
    dueDiv.classList.add("today-due-class");

    const dueH2 = document.createElement("h2");
    dueH2.textContent = `Due Date Today`;

    const dueUl = document.createElement("ul");
    //addlist

    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("quote-class");

    const quoteH2 = document.createElement("h2");
    quoteH2.textContent = `Quote of the Day`;

    const quoteP = document.createElement("p");
    quoteP.classList.add("quote-p");
    
    buttonDiv.append(label, input, addProjectBtn);

    projectDiv.append(projectH2, projectUl, buttonDiv);

    todolistDiv.append(todoH2, todoDiv);

    dueDiv.append(dueH2,dueUl);

    quoteDiv.append(quoteH2, quoteP);

    container.append(projectDiv,todolistDiv,dueDiv,quoteDiv);
}