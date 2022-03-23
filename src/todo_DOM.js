import { TodoStorage } from "./todos";
import { mainComp} from "./main";

//idk if im gonna keep this chunk of code here
//remember every class/function should only be doing one thing
//everything needs to be the most modular possible
//separate the DOM from the actual logic of implementing the todos.

function DOM_sidebar(name){
    document.getElementById("Demo").addEventListener("click", () => {
    console.log("in Demo")
    document.getElementById("container").appendChild(mainComp(name));
    // document.getElementsByClassName("main")[0].remove();
});
}

export {DOM_sidebar};