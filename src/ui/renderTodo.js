import { persist, projects, state } from "../project.js";
function renderTodos(){

    const container = document.querySelector(".todo-projects");
   container.innerHTML = ""

    projects[state.activeProject].forEach(todo => {

        const div = document.createElement("div");
        div.classList.add("singleTodo");
        div.classList.add(`${todo.priority}`)
        if(todo.completed){
            div.classList.add('completed');
        }

       const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
            todo.completed = !todo.completed;
            persist();
            renderTodos();
        });

        const label = document.createElement("div");
        label.textContent = todo.title;

        div.appendChild(checkbox);
        div.appendChild(label);


        container.prepend(div);
    });
    const head = document.querySelector('.projectTitle');
    head.innerText = "";
    const header = document.createElement('h2');
    header.innerText = `${state.activeProject}`;
    header.classList.add("projectHeader")
    head.prepend(header);
    console.log(projects)
}

export {renderTodos}