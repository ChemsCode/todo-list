import './style.css'
import { sidebarComp } from './assets/sidebar';
import {openForm, addProject} from './todo_DOM';
import {popupFormComp} from './assets/popupForm'

function component() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    element.appendChild(sidebarComp());
    element.appendChild(popupFormComp());
    return element;
}
 
document.getElementById("content").appendChild(component());

document.getElementById("+").addEventListener("click", openForm); 
// document.getElementById("AddProject").addEventListener("click", () => {
//     console.log("in")
// }); 