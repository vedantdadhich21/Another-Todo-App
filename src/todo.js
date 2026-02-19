import { projects } from "./project.js";
import { renderProject } from "./ui/renderProjects.js";

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

const form = document.querySelector("form")
form.addEventListener("submit",addTodo);

function addTodo(e){
    e.preventDefault();
    const formData = new FormData(form);
    const projectName = formData.get('project');
    const newTodo = new Todo(formData.get('title'),formData.get('description'),formData.get('dueDate'),formData.get('priority'));
    if(newTodo.title != "" && projects[projectName].findIndex(data => data.title === newTodo.title) == -1){
        projects[projectName].push(newTodo);
        renderProject(projectName)
    }
}
export {Todo};