function sidebarComp() {
    //Creating the sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");

    //creating Project title
    let title =  document.createElement("h1");
    title.setAttribute('id',`sidebar-title`);
    title.innerHTML = "Projects";
    sidebar.appendChild(title)

    //creating project list
    const projectList = document.createElement('ul');
    projectList.setAttribute('id', 'project-list');
    sidebar.appendChild(projectList)

    //creating Buttons
    const list = document.createElement('ul');
    let data = ["+"]


    data.forEach((item) => {
        let liButton = document.createElement("button")
        liButton.setAttribute('id',`${item}`);
        liButton.innerHTML = item;
        let li = document.createElement("li");
        li.appendChild(liButton);
        list.appendChild(li);
    });
    sidebar.appendChild(list);  
    
    return sidebar;
}

export {sidebarComp};