//File where I create the todo class

class Todo{
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;

    constructor(title, description, dueDate, priority, notes){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#notes = notes;
    }
    //getters
    get getTitle() {
      return this.#title;
    }
    get getDescription() {
      return this.#description;
    }
    get getDueDate() {
      return this.#dueDate;
    }
    get getPriority() {
      return this.#priority;
    }
    get getNotes() {
      return this.#notes;
    }
    //setters
    set setTitle(title) {this.#title = title;}
    set setDescription(desc) {this.#description = desc;}
    set setDueDate(date) {this.#dueDate = date;}
    set setPriority(priority) {this.#priority = priority;}
    set setNotes(notes) {this.#notes = notes;}

}

//the a project class which will hold the entirity of a Todo for a particular project
class Project {
    storage = new Array();
    #projectName;
    #projectDescription
    constructor(projetctName,projectDescription){
        this.#projectName = projetctName;
        this.#projectDescription = projectDescription;
    }

    get getProjectName() {
        return this.#projectName;
    }

    get getProjectDescription(){
      return this.#projectDescription;
    }

    set setProjectName(projectName) {this.#projectName = projectName;}

    set setProjectName(projectDescription) {this.#projectDescription = projectDescription;}

    //method to add a todo
    addTodo(title, description, dueDate, priority, notes){
        this.storage.push(new Todo(title, description, dueDate, priority, notes));
    }

    //method to remove a todo
    removeTodo(index){
        this.storage.splice(index, 1);
    }

}


class ProjectStorage{
  projectArr = new Array();
  constructor(){}

  addNewProject = (projectName, projectDescription) =>{
    this.projectArr.push(new Project(projectName, projectDescription))
  }

  removeProject = (index) =>{
    this.projectArr.splice(index, 1)
  }

  printInfo = () =>{
    console.log(this.projectArr);
  }
}

let allProjects = new ProjectStorage();

// const ProjectStorage = (() => {
//   let projectArr = new Array();

//   const addNewProject = (projectName, projectDescription) =>{
//     projectArr.push(new Project(projectName, projectDescription))
//   }

//   const removeProject = (index) =>{
//     projectArr.splice(index, 1)
//   }

//   const printInfo = () =>{
//     console.log(projectArr);
//   }
// })();

export {allProjects};