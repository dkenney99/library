const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function ChangeRead() {}

ChangeRead.prototype.changeStatus = function () {
  const cardFor = document.getElementById(this.id);
  const readButton = cardFor.querySelector(".bookStatus");
  if (this.read) {
    this.read = false;
    readButton.innerText = "Not read";
  } else {
    this.read = true;
    readButton.innerText = "Read";
  }
};

Book.prototype = Object.create(ChangeRead.prototype);

const addBookButton = document.querySelector(".add-book-button");
const bookShelf = document.querySelector(".bookshelf");
const addBookSection = document.querySelector(".add-book");

let counter = 0;

const showBooks = (library) =>
  library.forEach((book, i) => {
    const cardEl = document.createElement("div");
    cardEl.classList.add("card");
    book.id = counter;
    cardEl.setAttribute("id", counter);
    counter++;

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

    bookStatus.addEventListener("click", () => {
      console.log(book.changeStatus());
    });

    const bookRemove = document.createElement("button");
    bookRemove.classList.add("bookRemove");
    bookRemove.innerText = "Remove";
    bookRemove.addEventListener("click", () => {
      myLibrary.splice(book.id, 1);
      removeBookFromLibrary(book.id);
    });

    cardEl.appendChild(bookTitle);
    cardEl.appendChild(bookAuthor);
    cardEl.appendChild(bookPages);
    cardEl.appendChild(bookStatus);
    cardEl.appendChild(bookRemove);
    bookShelf.appendChild(cardEl);
  });

function addBookToLibrary() {
  const bookTitle = document.getElementById("bookTitle").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const pageNum = document.getElementById("pageNum").value;
  const readBefore = document.getElementById("readBefore").checked;
  const newBook = new Book(bookTitle, bookAuthor, pageNum, readBefore);
  const newLibrary = [newBook];
  myLibrary.push(newBook);

  showBooks(newLibrary);
}

function removeBookFromLibrary(bookId) {
  console.log(`${bookId} removed`);
  const list = document.querySelector(".bookshelf");
  list.removeChild(list.children[bookId]);
}

showBooks(myLibrary);
