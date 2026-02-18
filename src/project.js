const projects = ["Default"];
const select = document.querySelector("#projectList")

function populateList(projects){
    projects.forEach(element => {
        var option = document.createElement("option");
        option.innerHTML = element;
        select.appendChild(option);
    });
}

const newpro = document.querySelector("#newProject");
newpro.addEventListener("click",addItem)
function addItem(){
    const text = document.querySelector("#newItem").value;
    if(text.trim() != "" && projects.findIndex(element => element === text) == -1){
        projects.push(text)
        var option = document.createElement("option");
        option.innerHTML = text;
        select.appendChild(option);
    }
}

populateList(projects)

export  {projects};

