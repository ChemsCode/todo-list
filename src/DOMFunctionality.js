import {openFormTodo} from './todo_DOM';

//add button of corresponding projec to sidebar

function addProjectDOM(name){
    const list = document.getElementById("project-list");
    const newProj = document.createElement("li");
    let liButton = document.createElement("button")
    liButton.setAttribute('id',`${name}`);
    liButton.innerHTML = name;
    list.appendChild(liButton)
    list.appendChild(newProj);
    liButton.addEventListener("click", () => {
        const main = document.getElementById("main");
        while(main.firstChild){
            main.removeChild(main.firstChild);
        }
        displayProjectMain(name)
    }); 
}

//add button of coresponding project to main

function displayProjectMain(projectName){
    const addTodoBtn = document.createElement("button");
    addTodoBtn.innerHTML = `Add ToDo for ${projectName}`;
    const main = document.getElementById("main");
    main.appendChild(addTodoBtn);
    addTodoBtn.addEventListener("click", () => {
        openFormTodo();
    });

}

function removeProjectDOM(){

}

export {addProjectDOM};