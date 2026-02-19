const projects = {
    default: [],
};
const select = document.querySelector("#projectList")
import {renderProject} from "./ui/renderProjects.js"
function populateList(projects){
    Object.keys(projects).forEach(element => {
        var option = document.createElement("option");
        option.innerHTML = element;
        select.appendChild(option);
    });
}

const newpro = document.querySelector("#newProject");
newpro.addEventListener("click",addItem)
function addItem(){
    const text = document.querySelector("#newItem").value;
    if(text.trim() != "" && !projects[text]){
        var option = document.createElement("option");
        option.innerHTML = text;
        select.appendChild(option);
        projects[text] = [];
    }
}

populateList(projects)

export  {projects};

