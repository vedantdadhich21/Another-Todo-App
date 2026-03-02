import { activeProject, persist, projects, state } from "./project.js";
import { renderTodos } from "./ui/renderTodo.js";
function createTodo(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        completed: false
    };
}

const today = new Date().toISOString().split("T")[0];
const date = document.querySelector('#dueDate');
date.min = today;
date.value = today;


const form = document.getElementById("todo")
form.addEventListener("submit",addTodo);
function addTodo(e){
    console.log("i ran")
    e.preventDefault();
    const formData = new FormData(form);
    const projectName = state.activeProject;
    const newTodo = createTodo(formData.get('title'),formData.get('description'),formData.get('dueDate'),formData.get('priority'));
    console.log(newTodo);
    if(newTodo.title != "" && projects[projectName].findIndex(data => data.title === newTodo.title) == -1){
        projects[projectName].push(newTodo);
        persist();
        renderTodos();
    }
    document.querySelector('#newTodo').close();
    document.querySelector("#title").value = ""
    document.querySelector("#description").value = ""
}