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

//the TodoStorage class is basically like a project class which will hold the entirity of a Todo
class TodoStorage {
    storage = new Array();
    #projectName;
    constructor(projetctName){
        this.#projectName = projetctName;
    }

    get getProjectName() {
        return this.#projectName;
    }

    set setProjectName(projectName) {this.#projectName = projectName;}

    //method to add a todo
    addTodo(title, description, dueDate, priority, notes){
        this.storage.push(new Todo(title, description, dueDate, priority, notes));
    }

    //method to remove a todo
    removeTodo(index){
        this.storage.splice(index, 1);
    }

}

export {TodoStorage};