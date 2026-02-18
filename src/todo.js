let todo = []
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
    const newTodo = new Todo(formData.get('title'),formData.get('description'),formData.get('dueDate'),formData.get('priority'));
    if(newTodo.title != "" && todo.findIndex(todos => todos.title === newTodo.title) == -1 ){
        todo.push(newTodo);
        console.log(newTodo);
    }
    
}
export {Todo};