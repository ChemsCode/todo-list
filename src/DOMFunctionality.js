function addProjectDOM(name){
    const list = document.getElementById("project-list");
    const newProj = document.createElement("li");
    let liButton = document.createElement("button")
    liButton.setAttribute('id',`${name}`);
    liButton.innerHTML = name;
    list.appendChild(liButton)
    list.appendChild(newProj);
}

export {addProjectDOM};