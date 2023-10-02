function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(booksData => booksData.forEach(book => renderBooks(book) 
  ))
  console.log('before fetch returns')
}

function renderBooks(books) {
  const main = document.querySelector('main');
  //books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = books.name;
    main.appendChild(h2);
 // });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function initialize(){
    fetchBooks()
    console.log('after get all books')
}
initialize()