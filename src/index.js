import './style.css'
import {sidebarComp} from './components/sidebar';
import {openForm} from './todo_DOM';
import {popupFormComp} from './components/popupForm';
import {mainComp} from './components/main';
import {popupFormTodoComp} from './components/popupFormTodo';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    element.appendChild(sidebarComp());
    document.getElementById("content").appendChild(popupFormComp());
    document.getElementById("content").appendChild(popupFormTodoComp());
    element.appendChild(mainComp());
    return element;
}
 
document.getElementById("content").appendChild(component());

document.getElementById("+").addEventListener("click", openForm); 
// document.getElementById("AddProject").addEventListener("click", () => {
//     console.log("in")
// }); 