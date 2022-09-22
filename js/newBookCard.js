function newBookCard() {
    let container = document.createElement("div");
    container.classList.add("new-book");

    let h2 = document.createElement("h2");
    h2.textContent = "New Book";

    let bookForm = document.createElement("form")

    // Book title div
    bookForm.appendChild(createField("book-title", "text"));

    // Book author div
    bookForm.appendChild(createField("book-author", "text"));

    // Book pages div
    bookForm.appendChild(createField("pages", "number"));

    // Book read div
    bookForm.appendChild(createField("read", "checkbox"));

    let addButton = document.createElement("button");
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
    let input = document.createElement("input");

    label.setAttribute("for", name);

    input.setAttribute("type", type);
    input.setAttribute("id", name);
    input.setAttribute("name", name);
    if (type == "checkbox") {
        input.setAttribute("value", "yes");
    }

    container.appendChild(label);
    container.appendChild(input);

    return bookField;
}
