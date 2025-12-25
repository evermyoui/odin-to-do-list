export default function addProject(){
    const addProjectBtn = document.querySelector(".addProjectButton");
    const label = document.querySelector(".project-label");
    const input = document.querySelector("#project-title");

    addProjectBtn.addEventListener("click", ()=>{
        label.style.display = "block";
        input.style.display = "block";
    });
}
