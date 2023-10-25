
// Holds all the Book objects
// default values
const myLibrary = [{title:"Poseidon", author:"Bob", pages:"123", read: true}, {
    title:"Shipwreck", author:"Danson", pages:400, read: false}];

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read; // true / false

    this.info = function(){
       return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
// Need a function that will toggle the Read value and reflect changes in
// the Book Object
// Book.prototype = {
   
//     constructor :  Book,
//     toggleRead : function(){
//         if (this.read == true ) {
//             console.log("true");
//             checkBoxRead.checked;
//         } else {
//             console.log("false");
//         }
        
//     }
// }

// Adds book to library
// the confirm button runs this
function addBookToLibrary(){
    // get form input data
    let titleEl = document.querySelector("#title").value;
    let authorEl = document.querySelector("#author").value;
    let pageNumberEl = document.querySelector("#pageNum").value; // create a number validation 
    let readValueEl = document.querySelector("#readValue").checked; // true or false

    // create a new Book obj. from user input
    const newBook = new Book(titleEl, authorEl, pageNumberEl, readValueEl);
    myLibrary.push(newBook)
    
    // update table displayed
    displayLibraryBooks();

    // empty form after submission
    clearForm();
}

function deleteBook(){
    // delete book object
}

// clear form fields after submission
function clearForm(){
    document.querySelector("#title").value = '';
    document.querySelector("#author").value = '';
    document.querySelector("#pageNum").value = ''; 
    document.querySelector("#readValue").checked = false; 
}

// Display list of books in library
function displayLibraryBooks(){
    // Use table element on index.html
    const tableEl = document.querySelector("#bookTable");

    // table headings
    tableEl.innerHTML = "<thead><th>Book Title</th><th>Author</th><th>Page Count</th><th>Read</th><th>Delete</th></thead>";
    // Loop through the book objects in the myLibray array
    for(book of myLibrary){
        console.log(book);// view objects
        // creat the elements of the table
        const newRow = document.createElement("tr");

        const tdTitle = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPageNum = document.createElement("td");
        const tdRead = document.createElement("td");
        const tdHaveRead = document.createElement("input"); 
        tdHaveRead.type = "checkbox";// the element is further specified to be a checkbox
        const tdReadLabel = document.createElement("label");
        // places both checkbox and label in same table data cell
        tdRead.appendChild(tdHaveRead);
        tdRead.appendChild(tdReadLabel);
        const tdRemove= document.createElement("td");
        const removeBtn = document.createElement("button");
        tdRemove.appendChild(removeBtn);

        // assign the data from the Book object 
        tdTitle.textContent = book.title;
        tdAuthor.textContent =  book.author;
        tdPageNum.textContent = book.pages;
        tdHaveRead.checked =  book.read; // checked, depending on Book object Read value
        if (tdHaveRead.checked == true) {
            tdReadLabel.textContent = "Yes";
        } else {
            tdReadLabel.textContent = "No";
        }
        // add the data to table row 
        newRow.appendChild(tdTitle);
        newRow.appendChild(tdAuthor);
        newRow.appendChild(tdPageNum);
        newRow.appendChild(tdRead);
        newRow.appendChild(tdRemove);
    
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



