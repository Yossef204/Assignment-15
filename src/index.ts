/** 1. Base Class – User (1 Mark)
Create a class called User. The class should contain the following properties:
• Id (number)
• name (String)
• email(String)
• Password (String)
• Phone (String)
• age (Number ) (Must be between 18 and 60)
*/

class User {
    private _id: number;
    public name: string;
    public email: string;
    private _password: string;
    public phone: string;
    public age: number;


    constructor(id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number) {
        this._id = id;
        this.name = name;
        this.email = email;
        this._password = password;
        this.phone = phone;
        this.age = age;

        if (this.age < 18 || this.age > 60) {
            console.log("Age must be between 18 and 60");
        }
    }
    public get id() {
        return this._id;
    }
    public get password() {
        return this._password;
    }
    public displayInfo() {
        console.log(`name: ${this.name} \n email: ${this.email} \n phone: ${this.phone} \n age: ${this.age}`);
    }
}


const user1 = new User(1, "yossef", "y@g.com", "123", "11221122", 25);

user1.displayInfo();
console.log(user1.password)


/**  2. Inheritance – Admin User (1 Mark)
Create a class called Admin */

class Admin extends User {
    constructor(id: number,
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number) {
        super(id, name, email, password, phone, age);
    }

    public manageNotes() {
        console.log("Admin can manage notes");
    }
}

const admin1 = new Admin(2, "admin", "admin@g.com", "456", "22332233", 30);
admin1.manageNotes()

/** 3 - class note
 * Create a class called Note. The class should contain the following properties:
• Id (number)
• Title (String)
• Content (String)
• Author (User)
create a method called preview() that retuens a short review of content
 */

class Note {
    public id: number;
    public title: string;
    public content: string;
    public author: User;

    constructor(id: number, title: string, content: string, author: User) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public preview() {
        return `${this.title}: ${this.content.substring(0, 20)}...`;
    }

}

const note1 = new Note(1, "Note 1", "This is the content of note 1. It is a long content that should be previewed.", user1);
note1.author.displayInfo();
console.log(note1.preview());

/**Create a class called NoteBook
Requirements:  The NoteBook class should contain a collection of Notes objects .
 Implement methods such as : addNote() , removeNote()
 The relationship between Notebook and Note must represent Composition */

class NoteBook {
    public name: string;
    public notes: Note[];
    constructor(name: string,notes: Note[]) {
        this.name = name;
        this.notes = notes;
    }
    public addNote(note: Note) {
        this.notes.push(note);
    }
    public removeNote(noteName: string) {
        for (const note in this.notes) {
            if (this.notes[note]?.title === noteName) {
                this.notes.splice(Number(note), 1);
                console.log(`Note ${noteName} removed successfully`);
                return;
            }
        }
    }
}

const notebook1 = new NoteBook("My Notebook", [note1]);
notebook1.addNote(new Note(12, "Note 2", "This is the content of note 2. It is a long content that should be previewed.", user1));
console.log(notebook1.notes);

/** 5. Aggregation – User and Notebook (1 Mark)
Create a relationship between:
 User
 NoteBook

Requirements:
 A user can own multiple notebooks.
 This relationship should represent Aggregation.*/

class UserWithNotebooks{
    public user: User;
    public notebooks: NoteBook[];

    constructor(user: User, notebooks: NoteBook[]) {
        this.user = user;
        this.notebooks = notebooks;
    }
}

/** Create a Generic Class called :
 Storage
Requirements:  The class should be able to store any type of data . Example operations may include :
1. addItem ()
2. removeItem() */

class Storage<T>{
    public items:T[];
    constructor(items:T[]) {
        this.items = items;
    }
    public addItem(item:T) {
        this.items.push(item);
    }
    public removeItem(item:T) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}