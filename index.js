
const myLibrary = [];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
       return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
// Adds book to library
function addBookToLibrary(book){
    myLibrary.push(book);
}
// Display list of books in library
function displayLibraryBooks(){
    console.log(myLibrary.map(book => book.info()));
}

// example [hard-coded]
const b01 = new Book("Poseidon", "Bob", 123, true);
const b02 = new Book("Shipwreck", "Danson", 400, false);
addBookToLibrary(b01);
addBookToLibrary(b02);

displayLibraryBooks();


