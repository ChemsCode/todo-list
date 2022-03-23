import './style.css'
import { navbarComp } from './navbar';
import { sidebarComp } from './sidebar';
import { mainComp } from './main';

function component() {
    const element = document.createElement('div');
    element.setAttribute('id','container');
    element.appendChild(navbarComp());
    element.appendChild(sidebarComp());
    element.appendChild(mainComp());
    return element;
}
 
document.getElementById("content").appendChild(component());