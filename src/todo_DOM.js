import {allProjects} from "./todoClasses.js"
import {addProjectDOM} from './DOMFunctionality'
//opens the form for classes

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function openFormTodo() {
    document.getElementById("popupFormTodo").style.display = "block";
}

//adds the project to the list

function addProject(){
    const project_title = document.getElementById("project_name").value;
    const project_desc = document.getElementById("project_description").value;

    console.log(project_title  + " " + project_desc);

    allProjects.addNewProject(project_title, project_desc);
    allProjects.printInfo();

    addProjectDOM(project_title);

    closeForm();
}

function addTodo(){
    const todo_title = document.getElementById("todo_title").value;
    const todo_desc = document.getElementById("todo_description").value;
    const todo_date = document.getElementById("todo_date").value;
    const todo_priority = document.getElementById("todo_priority").value;
    const todo_notes = document.getElementById("todo_notes").value;
    console.log(todo_title + " " + todo_desc + " " + todo_date + " "
    + todo_priority + todo_notes);

    // allProjects.addNewProject(project_title, project_desc);
    // allProjects.printInfo();

    // addProjectDOM(project_title);

    // closeForm();
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    const project_title = document.getElementById("project_name");
    const project_desc = document.getElementById("project_description");
    
    project_title.value = '';
    project_desc.value = '';
}

export {openForm, openFormTodo, addTodo, addProject};