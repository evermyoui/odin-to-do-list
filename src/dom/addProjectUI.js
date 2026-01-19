export class AddProjectUI{
    constructor(projectManager){
        this.projectManager = projectManager;
        this.isInputVisible = false;

        this.addBtn = document.querySelector('.addProjectButton');
        this.label = document.querySelector('.project-label');
        this.input = document.querySelector('#project-title');
        this.cancelBtn = this.createCancelButton();

        this.init();
    }
    createCancelButton(){
        const btn = document.createElement('button');
        btn.textContent = 'Cancel';
        btn.style.display = 'none';
        btn.className = 'cancel';
        this.addBtn.parentElement.appendChild(btn);

        return btn;
    }
    init(){
        this.addBtn.addEventListener("click", ()=> {
            this.handleAddClick();
        })
        this.cancelBtn.addEventListener("click", ()=> {
            this.hideInput();
        })

        this.input.addEventListener("keypress", (e)=>{
            if (e.key === 'Enter' && this.isInputVisible){
                this.handleSubmit();
            }
        });
    }
    handleAddClick(){
        if(!this.isInputVisible){
            this.showInput();
        }else {
            this.handleSubmit();
        }
    }
    handleSubmit(){
        const title = this.input.value.trim();

        if(!title){
            alert("Please enter a Title");
            return;
        }
        this.projectManager.add(title);
        this.hideInput();
    }
    showInput(){
        this.label.style.display = 'block';
        this.input.style.display = 'block';
        this.cancelBtn.style.display = 'block';
        this.isInputVisible = true;
        this.input.focus();
    }
    hideInput() {
        this.label.style.display = 'none';
        this.input.style.display = 'none';
        this.cancelBtn.style.display = 'none';
        this.input.value = '';
        this.isInputVisible = false;
    }
}