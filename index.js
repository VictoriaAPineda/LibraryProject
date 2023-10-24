
// Holds all the Book objects
// default values
const myLibrary = [{title:"Poseidon", author:"Bob", pages:"123", read: true}, {
    title:"Shipwreck", author:"Danson", pages:400, read: false}];

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
// the confirm button runs this
function addBookToLibrary(){
    // get form input data
    let titleEl = document.querySelector("#title").value;
    let authorEl = document.querySelector("#author").value;
    let pageNumberEl = document.querySelector("#pageNum").value; // create a number validation 
    let readValueEl = document.querySelector("#readValue").value; //=== "true" ? true : false;
    // checkbox deafults needed.

    // create a new Book obj. from user input
    const newBook = new Book(titleEl, authorEl, pageNumberEl, readValueEl);
    myLibrary.push(newBook)
    
    // update table displayed
    displayLibraryBooks();

    // empty form after submission
    clearForm();
}

// clear form fields after submission
function clearForm(){
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pageNum").value = ''; 
    document.querySelector("#readValue").value = ''; // [need fix]
}

// Toggle is book has been read/not read (checkbox)
// checkbox should be loaded checked if true value from read property in Book obj. 
function toogleReadStatus(){
    

}

// Display list of books in library
function displayLibraryBooks(){
    // Use table element on index.html
    const tableEl = document.querySelector("#bookTable");
    // table headings
    tableEl.innerHTML = "<thead><th>Book Title</th><th>Author</th><th>Page Count</th><th>Read</th></thead>";
    // Loop through the book objects in the myLibray array
    for(book of myLibrary){
        // creat the elements of the table
        const newRow = document.createElement("tr");

        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPageNum = document.createElement("td");
        const tdHaveRead = document.createElement("td");
        // assign the data from the Book object 
        tdTitle.textContent = book.title;
        tdAuthor.textContent =  book.author;
        tdPageNum.textContent = book.pages;
        tdHaveRead.innerHTML = "<label>Read?</label><input type='checkbox' id='checkRead'></input>";
        // add the data to table row 
        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPageNum);
        newRow.appendChild(tdHaveRead); 
        // attach another row on table
        tableEl.appendChild(newRow);  
    }
    event.preventDefault(); // prevents page refresh when new data is added (wiping table)
}
displayLibraryBooks();


function openForm(){
    document.querySelector("#sideForm-Overlay").style.width = "300px";
}
function closeForm(){
    document.querySelector("#sideForm-Overlay").style.width = "0px";
    clearForm();
}



