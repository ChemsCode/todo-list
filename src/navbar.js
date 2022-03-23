function navbarComp() {
    //Creating the navbar
    const navbar = document.createElement('div');
    navbar.classList.add("navbar");
    navbar.innerHTML = "Todo-List";

    return navbar;
}

export {navbarComp};