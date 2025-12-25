export default function homeDisplay(){
    const container = document.querySelector(".container");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-class");

    const projectH2 = document.createElement("h2");
    projectH2.textContent = `All Projects`;

    const projectUl = document.createElement("ul");
    //addlist

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

    const todoUl = document.createElement("ul");
    //addlist

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
    quoteP.textContent = ""; // quote api

    buttonDiv.appendChild(label);
    buttonDiv.appendChild(input);
    buttonDiv.appendChild(addProjectBtn);

    projectDiv.appendChild(projectH2);
    projectDiv.appendChild(projectUl);
    projectDiv.appendChild(buttonDiv);

    todolistDiv.appendChild(todoH2);
    todolistDiv.appendChild(todoUl);

    dueDiv.appendChild(dueH2);
    dueDiv.appendChild(dueUl);

    quoteDiv.appendChild(quoteH2);
    quoteDiv.appendChild(quoteP);

    container.appendChild(projectDiv);
    container.appendChild(todolistDiv);
    container.appendChild(dueDiv);
    container.appendChild(quoteDiv);
}