import { format } from "date-fns";
import displayTextarea from "./list";

export default class Add_Project {
    displayInput(label, input){
        label.style.display = "block";
        input.style.display = "block";
    }
    clear(label, input){
        label.style.display = "none";
        input.style.display = "none";
        input.value = "";
    }
    uiDisplay(title){
        const projectUl = document.querySelector(".project-ul");
        const card = document.createElement("div");
        card.classList.add("card");
        const li = document.createElement("li");
        if (!title.trim()){
            title = `Unnamed Project`;
        }
        const p = document.createElement("p");
        p.textContent = title;
        const p1 = document.createElement("p");
        const today = new Date();
        const formatted = format(today, "yyyy-MM-dd");
        p1.textContent = formatted;
        const div = document.createElement("div");
        const addBtn = document.createElement("button");
        addBtn.classList.add("add-button");
        addBtn.textContent = "Add To-do";
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-button");
        deleteBtn.textContent = "Delete";

        li.appendChild(p);
        li.appendChild(p1);
        div.appendChild(addBtn);
        div.appendChild(deleteBtn);
        card.appendChild(li);
        card.appendChild(div);
        projectUl.appendChild(card);

        addBtn.addEventListener("click", ()=>{
            displayTextarea();
        })
    }
}