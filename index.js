/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */

// Holds all the Book objects default values for testing
const myLibrary = [
  {
    title: 'Poseidon',
    author: 'Bob',
    pages: '123',
    read: true,
  },
  {
    title: 'Shipwreck',
    author: 'Danson',
    pages: 400,
    read: false,
  },
];

/* Book Object
 * @param {String} title
 * @param {String} author
 * @param {String} pages
 * @param {Boolean} read
 */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // either true / false

  /* this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  }; */
}

// clear form fields after submission
function clearForm() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pageNum').value = '';
  document.querySelector('#readValue').checked = false;
}

// Display list of books in library
function displayLibraryBooks() {
  // Use table element on index.html
  const tableEl = document.querySelector('#bookTable');

  // table headings
  tableEl.innerHTML = '<thead><th>Book Title</th><th>Author</th><th>Page Count</th><th>Read</th><th>Delete</th></thead>';
  // Loop through the book objects in the myLibray array

  for (const book of myLibrary) {
    console.log(book); // view objects
    // creat the elements of the table
    const newRow = document.createElement('tr');

    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdPageNum = document.createElement('td');
    const tdRead = document.createElement('td');
    // check box
    const tdHaveRead = document.createElement('input');
    tdHaveRead.type = 'checkbox'; // the element is further specified to be a checkbox
    tdHaveRead.id = 'readCheckbox';
    tdHaveRead.addEventListener('click', () => {
      book.read = !book.read; // registers changes to Book object
      displayLibraryBooks();
    });
    const tdReadLabel = document.createElement('label');
    tdReadLabel.id = 'readlabel';
    // places both checkbox and label in same table data cell
    tdRead.appendChild(tdHaveRead);
    tdRead.appendChild(tdReadLabel);
    // remove button
    const tdRemove = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.id = 'removeBtn';
    removeBtn.textContent = 'X';
    tdRemove.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayLibraryBooks();
    });
    tdRemove.appendChild(removeBtn);
    // assign the data from the Book object
    tdTitle.textContent = book.title;
    tdAuthor.textContent = book.author;
    tdPageNum.textContent = book.pages;
    tdHaveRead.checked = book.read; // checked, depending on Book object Read value
    if (tdHaveRead.checked === true) {
      tdReadLabel.textContent = 'Yes';
    } else {
      tdReadLabel.textContent = 'No';
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

function checkInputIsFilled(inputId) {
  const input = inputId;
  let filled = true;
  if (input.validity.valueMissing) {
    filled = false;
    input.setCustomValidity('Fill in field');
    input.reportValidity();
    return filled;
  }
  return filled;
}

// Adds book to library
// Activated on Confirm Button
function addBookToLibrary() {
  // get form input data values
  const titleEl = document.querySelector('#title').value;
  const authorEl = document.querySelector('#author').value;
  const pageNumberEl = document.querySelector('#pageNum').value; // TODO: Create a number validation
  const readValueEl = document.querySelector('#readValue').checked; // true or false

  // Checks for empty fields
  if (checkInputIsFilled(document.querySelector('#title')) === true
    && checkInputIsFilled(document.querySelector('#author')) === true
    && checkInputIsFilled(document.querySelector('#pageNum')) === true) {
    // create a new Book obj. from user input
    const newBook = new Book(titleEl, authorEl, pageNumberEl, readValueEl);
    myLibrary.push(newBook);

    // update table displayed
    displayLibraryBooks();

    // empty form after submission
    clearForm();
  } else {
    // Recheck/ Reruns for any user edits to the form
    checkInputIsFilled(document.querySelector('#title'));
    checkInputIsFilled(document.querySelector('#author'));
    checkInputIsFilled(document.querySelector('#pageNum'));
  }
}

function openForm() {
  document.querySelector('#sideForm-Overlay').style.width = '300px';
}
function closeForm() {
  document.querySelector('#sideForm-Overlay').style.width = '0px';
  clearForm();
}
