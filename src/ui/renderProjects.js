import { projects } from "../project.js";
import { renderTodo } from "./renderTodo.js";

function renderProject(projectName){
    
    const container = document.createElement('div');
    const parent = document.querySelector('.todo-projects');

    container.innerHTML = `<h1>${projectName}</h1>`
    const todos = projects[projectName];

    todos.forEach(todo => {
        const child = document.createElement('div');
        child.textContent = `${todo.title}`;
        container.appendChild(child);
    });
    parent.appendChild(container)
}

export {renderProject}
