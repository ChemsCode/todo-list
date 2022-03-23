import './style.css'
import { navbarComp } from './navbar';
import { sidebarComp } from './sidebar';
import { DOM_sidebar } from './todo_DOM';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    element.appendChild(navbarComp());
    element.appendChild(sidebarComp());
    return element;
}
 
document.getElementById("content").appendChild(component());

DOM_sidebar("test");