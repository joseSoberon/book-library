let main = document.querySelector(".flex-main");
let addButton = document.querySelector("#add-button");

let addBook;

let books = [];

addButton.addEventListener("click", () => {
    if (!checkExist(main)) {
        main.appendChild(newBookCard());
        addBook = document.querySelector("#new-book-button");
    }

    addBook.addEventListener("click", () => {
        let newBookContainer = document.querySelector("form");
        if (newBookContainer[0].value == "" || newBookContainer[1].value == "" || newBookContainer[2].value == "") {
            console.log("Please fill the form")
        }
        else {
            createBookObject(newBookContainer);
            main.removeChild(main.lastChild);
        }
    })
})

function createBookObject(container) {
    class Book {
        constructor() {
            this.title = container.querySelector("#title").value;
            this.author = container.querySelector("#author").value;
            this.pages = container.querySelector("#pages").value;
            this.read = container.querySelector("#read").checked;
        }
    }

    let newBook = new Book();
    books.push(newBook);
}

/*
let books = [];

const addBook = e => {
    let book = {
        title: document.getElementById("book-title").value,
        author: document.getElementById("book-author").value,
        pages: document.getElementById("pages").value,
        read: document.getElementById("read").value
    }
    books.push(book);
    document.forms[0].reset();
}

let addButton = document.querySelector("#new-book-button");

addButton.addEventListener("click", () => {
    addBook();
    console.log(books);
})
*/

function checkExist(element) {
    let child = element.querySelector(".new-book");

    if (child == null) {
        return false;
    }
    return true;
}

function newBookCard() {
    let container = document.createElement("div");
    container.classList.add("new-book");

    let h2 = document.createElement("h2");
    h2.textContent = "New Book";

    let bookForm = document.createElement("form")

    // Book title div
    bookForm.appendChild(createField("title", "text"));

    // Book author div
    bookForm.appendChild(createField("author", "text"));

    // Book pages div
    bookForm.appendChild(createField("pages", "number"));

    // Book read div
    bookForm.appendChild(createField("read", "checkbox"));

    let addButton = document.createElement("button");
    addButton.textContent = "Add book";
    addButton.setAttribute("id", "new-book-button");

    container.appendChild(h2);
    container.appendChild(bookForm);
    container.appendChild(addButton);

    return container;
}

function createField(name, type) {
    let bookField = document.createElement("div")
    bookField.classList.add("book-field");

    let label = document.createElement("label");
    if (type == "checkbox") {
        label.textContent = "Have you read this book?";
    }
    else {
        label.textContent = `Book ${name}`;
    }
    let input = document.createElement("input");

    label.setAttribute("for", name);

    input.setAttribute("type", type);
    input.setAttribute("id", name);
    input.setAttribute("name", name);

    bookField.appendChild(label);
    bookField.appendChild(input);

    return bookField;
}
