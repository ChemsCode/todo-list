import { openForm } from "../todo_DOM";
import { addProject } from "../todo_DOM";

function popupFormComp() {
    //Creating the popup form
    const popupFormContainer = document.createElement('div');
    popupFormContainer.classList.add("loginPopup");

    const popupForm = document.createElement('div');
    popupForm.classList.add("formPopup");
    popupForm.setAttribute('id',`popupForm`);

    popupFormContainer.appendChild(popupForm);

    const formContainer = document.createElement('div');
    formContainer.classList.add("formContainer");

    //creating forms

    //project name label
    let project_name_label = document.createElement("label");
    project_name_label.innerHTML = "Project Name";
    project_name_label.setAttribute("for", "project_name");
    formContainer.appendChild(project_name_label);
    //project name form
    let project_name =  document.createElement("input");
    project_name.setAttribute('type',`text`);
    project_name.setAttribute('placeholder',`Enter Project Name`);
    project_name.setAttribute('id',`project_name`);
    project_name.setAttribute('name',`project_name`);
    formContainer.appendChild(project_name)

    
    //project name label
    let project_description_label = document.createElement("label");
    project_description_label.innerHTML = "Project Description";
    project_description_label.setAttribute("for", "project_description");
    formContainer.appendChild(project_description_label);
    //project description
    let project_description =  document.createElement("input");
    project_description.setAttribute('type',`text`);
    project_description.setAttribute('placeholder',`Enter Project Description`);
    project_description.setAttribute('id',`project_description`);
    project_description.setAttribute('name',`project_description`);
    formContainer.appendChild(project_description);

    //add project button
    let addProjectBtn = document.createElement("button")
    addProjectBtn.setAttribute('type',`button`);
    addProjectBtn.classList.add("btn-cancel");
    addProjectBtn.setAttribute('id',`addProject`);
    addProjectBtn.innerHTML = "Add Project";
    formContainer.appendChild(addProjectBtn);

    addProjectBtn.addEventListener("click", addProject); 

    popupForm.appendChild(formContainer);
    
    return popupFormContainer;
}

export {popupFormComp};