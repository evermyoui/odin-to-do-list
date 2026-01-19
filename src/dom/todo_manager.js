import { Todo } from "../logic/todo";

export class TodoManager{
    constructor(){
        this.projectManager = this.projectManager;
        this.container = document.querySelector('.todo_class');
        this.isVisible = false;
        this.currentProjectId = null;
    }
    show(projectId){
        if (this.isVisible) return;

        this.currentProjectId = projectId;
        this.isVisible = true;

        const form = this.createsForm();
        this.container.appendChild(form);
    }
    hide(){
        const form = this.container.querySelector('.todo-container');
        if (form) form.remove();

        this.isVisible = false;
        this.currentProjectId = null;
    }
    createsForm(){
        const container = document.createElement("div");
        container.className = "todo-container";

        const card = document.createElement("div");
        card.className = "todo-card";

        card.innerHTML = `
            <input type="text" id="todo-title" placeholder="Enter Title" />
            <div>
                <button class="add-button">+</button>
                <button class="delete-button">×</button>
            </div>
            <textarea class="description" rows="3" placeholder="Description"></textarea>
            <div class="dropdown-div">
                <button class="dropdown-btn">Select Priority</button>
                <ul class="dropdown-ul">
                    <li>High</li>
                    <li>Medium</li>
                    <li>Low</li>
                </ul>
            </div>
        `;
        this.attachHandlers(card);
        container.appendChild(card);

        card.querySelector("#todo-title").focus();

        return container;
    }
    attachHandlers(){
        const addBtn = card.querySelector(".add-button");
        const deleteBtn = card.querySelector(".delete-button");
        const dropdownBtn = card.querySelector(".dropdown-btn");
        const dropdownDiv = card.querySelector(".dropdown-ul");
        const dropdownItems = card.querySelectorAll(".dropdown-ul li");

        addBtn.addEventListener("click", ()=> {
            this.handleSubmit(card);
        });
        deleteBtn.addEventListener("click", () => {
            this.hide();
        });

        dropdownBtn.addEventListener("click", (e) => {
            e.preventDefault();
            dropdownDiv.classList.toggle('active');
        });

        dropdownItems.forEach(item => {
            item.addEventListener("click", ()=>{
                dropdownBtn.textContent = item.textContent;
                dropdownBtn.dataset.priority = item.textContent;
                dropdownDiv.classList.remove('active');
            });
        });
    }
    handleSubmit(card){
        const title = card.querySelector('#todo-title').value.trim();
        const description = card.querySelector('.description').value;
        const priority = card.querySelector('.dropdown-btn').dataset.priority || "Medium";

        if (!title){
            alert("Please enter a title");
            return;
        }
        const todo = new Todo(title, description);
        todo.changePriority(priority);

        this.projectManager.addToDoToProject(this.currentProjectId, todo);
        this.hide();
    }
}

