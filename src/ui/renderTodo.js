import { projects } from "../project.js";
import { activeProject } from "../project.js";
function renderTodos(){

    const container = document.querySelector(".todo-projects");
   container.innerHTML = ""

    projects[activeProject].forEach(todo => {

        const div = document.createElement("div");
        div.classList.add("singleTodo");
        div.classList.add(`${todo.priority}`)

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <small>${todo.dueDate}  
            ${todo.priority} ${todo.checkList}</small>
        `;

        container.prepend(div);
    });
    const head = document.querySelector('.projectTitle');
    head.innerText = ""
    const header = document.createElement('h2');
    header.innerText = `${activeProject}`;
    header.classList.add("projectHeader")
    head.prepend(header);
}

export {renderTodos}