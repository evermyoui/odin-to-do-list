// // import Add_Project from "./uiProject";
// import { uiDisplay } from "./project_controller";

// export default function addProject(){
//     const addProjectBtn = document.querySelector(".addProjectButton");
//     const label = document.querySelector(".project-label");
//     const input = document.querySelector("#project-title");
//     const cancelBtn = createCancelBtn();

//     let firstTap = true;

//     const displayInput = (label, input)=>{
//         label.style.display = "block";
//         input.style.display = "block";
//         addProjectBtn.parentElement.appendChild(cancelBtn);
//     }
//     const clear = (label, input) => {
//         label.style.display = "none";
//         input.style.display = "none";
//         input.value = "";
//     }
    
//     addProjectBtn.addEventListener("click", ()=>{
//         if (firstTap){
//             displayInput(label, input);
//             firstTap = false;
//             firstTap ? cancelBtn.style.display = "none" : cancelBtn.style.display = "block";
//         }else {
//             uiDisplay(input.value);
//             clear(label, input);
//             firstTap = true;
//             firstTap ? cancelBtn.style.display = "none" : cancelBtn.style.display = "block";
//         }
//     });

//     cancelBtn.addEventListener("click", ()=>{
//         clear(label, input);
//         firstTap = true;
//         firstTap ? cancelBtn.style.display = "none" : cancelBtn.style.display = "block";
//     });
    
// }
// function createCancelBtn(){
//     const cancelBtn = document.createElement("button");
//     cancelBtn.classList.add("cancel");
//     cancelBtn.textContent = "Cancel";
//     return cancelBtn;
// }