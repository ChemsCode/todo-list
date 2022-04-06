function mainComp(projectName) {
    //Creating the main section
    const main = document.createElement('div');
    main.classList.add("main");
    main.setAttribute('id', "main");
    main.innerHTML = "test";
    const todoList = document.createElement('ul');
    todoList.setAttribute('id', 'todo-list');
    main.appendChild(todoList);
    return main;
}

export {mainComp};