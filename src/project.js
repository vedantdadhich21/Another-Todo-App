import { renderNavbar } from "./ui/renderNavbar.js";
import { renderTodos } from "./ui/renderTodo.js";
const projects = {
    default: [],
};
let activeProject = "default";
const newpro = document.querySelector("#newProject");
newpro.addEventListener("click",addItem)
function addItem(){
    console.log("i ran")
    const input = document.querySelector("#newItem");
    const text = document.querySelector("#newItem").value;
    if(text.trim() != "" && !projects[text]){
        projects[text] = [];
        renderNavbar();
    }
    input.value =""
}

document.querySelector(".currProjects")
.addEventListener("click", e => {

    if(!e.target.dataset.project) return;

    activeProject = e.target.dataset.project;
    renderNavbar();
    renderTodos();

});
export  {projects,activeProject};

