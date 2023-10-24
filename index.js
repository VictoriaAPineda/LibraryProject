
// Holds all the Book objects
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
// Toggle is book has been read/not read (checkbox)
// checkbox should be loaded checked if true value from read property in Book obj. 
function toogleReadStatus(){
    
   

}




// Display list of books in library
function displayLibraryBooks(){
    const newbookTable = document.createElement("table");
    newbookTable.innerHTML = "<thead><th>Book Title</th><th>Author</th><th>Page Count</th><th>Read</th></thead>"
    // Loop through the book objects in the myLibray array
    for(book of myLibrary){
        // creat the elements of the table
        const newRow = document.createElement("tr");
        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPageNum = document.createElement("td");
        const tdHaveRead = document.createElement("td");
        // assign the data 
        tdTitle.textContent = book.title;
        tdAuthor.textContent =  book.author;
        tdPageNum.textContent = book.pages;

        // tdHaveRead.textContent = book.read; // adjust
        tdHaveRead.innerHTML = "<label>Read?</label><input type='checkbox' id='checkRead'></input>"

        // add the data to table
        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPageNum);
        newRow.appendChild(tdHaveRead); 
        // start anoterh row
        newbookTable.appendChild(newRow);
    }
    // add table to html
    const bTable = document.querySelector("#user-libray");
    bTable.appendChild(newbookTable);
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



