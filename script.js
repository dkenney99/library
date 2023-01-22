const myLibrary = [
  {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    pages: 423,
    read: true,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowlings",
    pages: 311,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookButton = document.querySelector(".add-book-button");
const bookShelf = document.querySelector(".bookshelf");
const addBookSection = document.querySelector(".add-book");

addBookButton.addEventListener("click", () => {});

const refreshLibrary = () =>
  myLibrary.forEach((book) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");

    const bookTitle = document.createElement("p");
    bookTitle.classList.add("bookTitle");
    bookTitle.innerText = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.innerText = book.author;

    const bookPages = document.createElement("p");
    bookPages.classList.add("bookPages");
    bookPages.innerText = `${book.pages} pages`;

    const bookStatus = document.createElement("button");
    bookStatus.classList.add("bookStatus");
    if (book.read) {
      bookStatus.innerText = "Read";
    } else {
      bookStatus.innerText = "Not read";
    }

    const bookRemove = document.createElement("button");
    bookRemove.classList.add("bookRemove");
    bookRemove.innerText = "Remove";

    cardEl.appendChild(bookTitle);
    cardEl.appendChild(bookAuthor);
    cardEl.appendChild(bookPages);
    cardEl.appendChild(bookStatus);
    cardEl.appendChild(bookRemove);
    bookShelf.appendChild(cardEl);
  });

refreshLibrary();

function addBookToLibrary() {
  const bookTitle = document.getElementById("userInput").value;
  const newBook = new Book(bookTitle, "Aldous Huxley", 225, true);
  myLibrary.push(newBook);
  console.log(myLibrary);
  console.log(typeof newBook);
  refreshLibrary();
}
