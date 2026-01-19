export function renderTemplate() {
    const container = document.querySelector('.container');

    container.innerHTML = `
                <div class="project-class">
                    <h2>All Projects</h2>
                    <ul class="project-ul"></ul>
                    <div class="buttonDiv">
                        <label class="project-label" for="project-title" style="display: none;">Add Project</label>
                        <input type="text" id="project-title" placeholder="Enter Project Title" style="display: none;" />
                        <button class="addProjectButton">Add Project</button>
                    </div>
                </div>

                <div class="to-do-list-class">
                    <h2>To Do List</h2>
                    <div class="todo-class"></div>
                </div>

                <div class="today-due-class">
                    <h2>Due Date Today</h2>
                    <ul></ul>
                </div>

                <div class="quote-class">
                    <h2>Quote of the Day</h2>
                    <p class="quote-p">Loading quote...</p>
                </div>
    `;
}