import { addTodo } from "../todo_DOM";

function popupFormTodoComp() {
    //Creating the popup form
    const popupFormContainer = document.createElement('div');
    popupFormContainer.classList.add("loginPopup");

    const popupForm = document.createElement('div');
    popupForm.classList.add("formPopup");
    popupForm.setAttribute('id',`popupFormTodo`);

    popupFormContainer.appendChild(popupForm);

    const formContainer = document.createElement('div');
    formContainer.classList.add("formContainer");

    //creating forms

    //todo name label
    let todo_title_label = document.createElement("label");
    todo_title_label.innerHTML = "Todo Title";
    todo_title_label.setAttribute("for", "todo_title");
    formContainer.appendChild(todo_title_label);
    //todo name form
    let todo_title =  document.createElement("input");
    todo_title.setAttribute('type',`text`);
    todo_title.setAttribute('placeholder',`Enter Todo Title`);
    todo_title.setAttribute('id',`todo_title`);
    todo_title.setAttribute('name',`todo_title`);
    formContainer.appendChild(todo_title)

    
    //todo desc label
    let todo_description_label = document.createElement("label");
    todo_description_label.innerHTML = "Todo Description";
    todo_description_label.setAttribute("for", "todo_description");
    formContainer.appendChild(todo_description_label);
    //project description
    let todo_description =  document.createElement("input");
    todo_description.setAttribute('type',`text`);
    todo_description.setAttribute('placeholder',`Enter Toto Description`);
    todo_description.setAttribute('id',`todo_description`);
    todo_description.setAttribute('name',`todo_description`);
    formContainer.appendChild(todo_description);


    //todo date label
    let todo_date_label = document.createElement("label");
    todo_date_label.innerHTML = "Todo Description";
    todo_date_label.setAttribute("for", "todo_date");
    formContainer.appendChild(todo_date_label);
    //todo date
    let todo_date =  document.createElement("input");
    todo_date.setAttribute('type',`text`);
    todo_date.setAttribute('placeholder',`Enter Todo Date`);
    todo_date.setAttribute('id',`todo_date`);
    todo_date.setAttribute('name',`todo_date`);
    formContainer.appendChild(todo_date);

    //todo priority
    let todo_priority_label = document.createElement("label");
    todo_priority_label.innerHTML = "Todo Description";
    todo_priority_label.setAttribute("for", "todo_priority");
    formContainer.appendChild(todo_priority_label);
    //todo priority
    let todo_priority =  document.createElement("input");
    todo_priority.setAttribute('type',`text`);
    todo_priority.setAttribute('placeholder',`Enter Todo Priority`);
    todo_priority.setAttribute('id',`todo_priority`);
    todo_priority.setAttribute('name',`todo_priority`);
    formContainer.appendChild(todo_priority);


    //todo notes
    let todo_notes_label = document.createElement("label");
    todo_notes_label.innerHTML = "Todo Description";
    todo_notes_label.setAttribute("for", "todo_notes");
    formContainer.appendChild(todo_notes_label);
    //todo notes
    let todo_notes =  document.createElement("input");
    todo_notes.setAttribute('type',`text`);
    todo_notes.setAttribute('placeholder',`Enter Todo Priority`);
    todo_notes.setAttribute('id',`todo_notes`);
    todo_notes.setAttribute('name',`todo_notes`);
    formContainer.appendChild(todo_notes);

    //add project button
    let addProjectBtn = document.createElement("button")
    addProjectBtn.setAttribute('type',`button`);
    addProjectBtn.setAttribute('id',`addTodo`);
    addProjectBtn.innerHTML = "Add Todo";
    formContainer.appendChild(addProjectBtn);

    addProjectBtn.addEventListener("click", addTodo); 

    popupForm.appendChild(formContainer);
    
    return popupFormContainer;
}

export {popupFormTodoComp}