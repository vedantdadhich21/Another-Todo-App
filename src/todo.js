import { activeProject, projects } from "./project.js";
import { renderNavbar } from "./ui/renderNavbar.js";
import { renderTodos } from "./ui/renderTodo.js";
class Todo{
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = false;
    }
    toggleCheckList(){
        if(this.checkList == false){
            this.checkList = true;
        }
        else{
            this.checkList = true;
        }
    }
}

const today = new Date().toISOString().split("T")[0];
const date = document.querySelector('#dueDate');
date.min = today;
date.value = today;


const form = document.getElementById("todo")
form.addEventListener("submit",addTodo);
function addTodo(e){
    e.preventDefault();
    const formData = new FormData(form);
    const projectName = activeProject;
    const newTodo = new Todo(formData.get('title'),formData.get('description'),formData.get('dueDate'),formData.get('priority'));
    if(newTodo.title != "" && projects[projectName].findIndex(data => data.title === newTodo.title) == -1){
        projects[projectName].push(newTodo);
        renderTodos();
    }
    document.querySelector('#newTodo').close();
    document.querySelector("#title").value = ""
    document.querySelector("#description").value = ""
}
export {Todo};