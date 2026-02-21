import { projects } from "../project.js";
import { renderTodo } from "./renderTodo.js";
import { activeProject } from "../project.js";

function renderNavbar(){
    const projectList = document.querySelector(".currProjects")
     projectList.innerHTML = "<h2>Available Projects</h2>";
    Object.keys(projects).forEach(element => {
        var btn = document.createElement('button')
       btn.innerText = element;
       btn.dataset.project = element;
       projectList.appendChild(btn);
       if(element === activeProject)
            btn.classList.add("outline");
    });
}

export {renderNavbar}
