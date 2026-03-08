import "./styles.css"
import { projects } from "./project.js"
import "./todo.js"
import { renderNavbar } from "./ui/renderNavbar.js"
import { renderTodos } from "./ui/renderTodo.js"

document.getElementById("menuToggle")
  .addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("open");
  });
  
renderNavbar()
renderTodos()
