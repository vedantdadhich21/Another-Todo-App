import { renderNavbar } from "./ui/renderNavbar.js";
import { renderTodos } from "./ui/renderTodo.js";
import { saveState,loadState } from "./storage.js";

const stored = loadState();

const projects = stored?.projects || { Default: [] };

export const state = {
    activeProject: stored?.activeProject || "Default"
}; 

export function persist(){
    saveState({
        projects,
        activeProject: state.activeProject
    });
}

document.querySelector("#demo-dialog-form form")
.addEventListener("submit", e=>{
    e.preventDefault();
    addItem();
});
function addItem(){
    console.log("i ran")
    const input = document.querySelector("#newItem");
    const text = document.querySelector("#newItem").value;
    if(text.trim() != "" && !projects[text]){
        projects[text] = [];
        state.activeProject = text;
        persist();
        renderNavbar();
        renderTodos();
    }
    
    input.value =""
     document.querySelector('#demo-dialog-form').close();
}

document.querySelector(".currProjects")
.addEventListener("click", e => {

    if(!e.target.dataset.project) return;

    state.activeProject = e.target.dataset.project;
    persist();
    renderNavbar();
    renderTodos();

});
export  {projects};

