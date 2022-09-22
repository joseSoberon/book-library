let main = document.querySelector(".flex-main");
let addButton = document.querySelector("#add-button");
let removeButton = document.querySelector("#remove");

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
            let newBook = createBookObject(newBookContainer);
            main.removeChild(main.lastChild);

            let bookContainer = createBookCard(newBook);
            main.appendChild(bookContainer);
        }
    })
})

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

    return newBook;
}


function createBookCard(book) {
    let container = document.createElement("div");
    container.classList.add("book-card");

    let titleSection = createBookCardSection("Book title", book.title);
    container.appendChild(titleSection);

    let authorSection = createBookCardSection("Book author", book.author);
    container.appendChild(authorSection);

    let pagesSection = createBookCardSection("Pages", book.pages);
    container.appendChild(pagesSection);

    let readSection = document.createElement("div");
    let h2 = document.createElement("h2");
    readSection.appendChild(h2)
    h2.textContent = "Already read?";
    let p = document.createElement("p");
    if (book.read == true) {
        p.textContent = "Yes";
    }
    else {
        p.textContent = "No";
    }
    readSection.appendChild(p);
    container.appendChild(readSection);

    let button = document.createElement("btn");
    button.setAttribute("id", "remove");
    button.textContent = "Remove book";
    container.appendChild(button)

    return container;
}

function createBookCardSection(name, text) {
    let container = document.createElement("div")

    let h2 = document.createElement("h2");
    h2.textContent = name

    let p = document.createElement("p");
    p.textContent = text;

    container.appendChild(h2);
    container.appendChild(p);

    return container
}
