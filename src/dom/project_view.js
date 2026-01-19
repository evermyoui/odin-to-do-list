export class ProjectView{
    constructor(containerSelector){
        this.container = document.querySelector(containerSelector);
    }
    render(projects, handlers){
        this.container.innerHTML = '';

        projects.forEach(project => {
            const card = this.createCard(project, handlers);
            this.container.appendChild(card);
        });
        this.container.style.display = projects.length > 0 ? "flex" : "none";
    }
    createCard(project, {onDelete, onAddToDo}){
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = project.id;

        card.innerHTML = `
            <li>
                <p>${this.escapeHtml(project.title)}</p>
                <p>${project.date}</p>
            </li>

            <div class = "button-group">
                <button class = "add-button">Add to do</button>
                <button class = "delete-button">Delete</button>
            </div>
        `;
        card.querySelector(".add-button").addEventListener("click", () => onAddToDo(project.id));
        card.querySelector(".delete-button").addEventListener("click", () => onDelete(project.id));

        return card;
    }

    escapeHtml(title){
        const div = document.createElement("div");
        div.textContent = title;
        return div.innerHTML;
    }
}