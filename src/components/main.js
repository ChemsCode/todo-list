function mainComp(projectName) {
    //Creating the main section
    const main = document.createElement('div');
    main.classList.add("main");
    main.setAttribute('id',projectName);
    let add = document.createElement("button")
    add.innerHTML = "Add Task"
    main.appendChild(add);
    return main;
}

export {mainComp};