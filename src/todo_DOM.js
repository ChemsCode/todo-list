import {allProjects} from "./todoClasses.js"
import {addProjectDOM} from './DOMFunctionality'
//opens the form for classes

function openForm() {
    document.getElementById("popupForm").style.display = "block";
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

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    const project_title = document.getElementById("project_name");
    const project_desc = document.getElementById("project_description");
    
    project_title.value = '';
    project_desc.value = '';
}

export {openForm, addProject};