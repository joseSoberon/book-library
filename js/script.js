let main = document.querySelector(".flex-main");

let newBook = newBookCard();

main.appendChild(newBook);

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
    if (type == "checkbox") {
        input.setAttribute("value", "yes");
    }

    bookField.appendChild(label);
    bookField.appendChild(input);

    return bookField;
}
