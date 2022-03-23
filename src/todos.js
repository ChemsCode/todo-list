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
    get geTitle() {
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

export {Todo};