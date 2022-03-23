function sidebarComp() {
    //Creating the sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");
    const list = document.createElement('ul');
    let data = ["Demo", "Projects"]


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