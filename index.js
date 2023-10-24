
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

// hard-code for testing. 
const b01 = new Book("Poseidon", "Bob", 123, true);
const b02 = new Book("Shipwreck", "Danson", 400, false);
addBookToLibrary(b01);
addBookToLibrary(b02);

displayLibraryBooks();




function openForm(){
    document.querySelector("#sideForm-Overlay").style.width = "300px";
}

function closeForm(){
    document.querySelector("#sideForm-Overlay").style.width = "0px";
}



