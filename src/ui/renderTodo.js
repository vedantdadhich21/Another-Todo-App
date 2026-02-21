import { projects } from "../project.js";
import { activeProject } from "../project.js";
function renderTodos(){

    const container = document.querySelector(".todo-projects");
    container.innerHTML = "";

    projects[activeProject].forEach(todo => {

        const div = document.createElement("div");
        div.classList.add("todo");

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.description}</p>
            <small>${todo.dueDate} | ${todo.priority}</small>
        `;

        container.appendChild(div);
    });
}

export {renderTodos}