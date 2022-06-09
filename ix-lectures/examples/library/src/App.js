import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BookInputs from './components/BookInputs';
import BookTable from './components/BookTable';

export default function App() {
  const [books, setBooks] = useState([]);

  function addBook(book) {
    setBooks([...books, book]);
  }

  function removeBook(book) {
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div>
      <div className="card card-body my-5 mx-3 px-5">
        <div className="text-center">
          <h1>Book List:</h1>
        </div>
        <BookInputs addBook={addBook} />
        <BookTable books={books} removeBook={removeBook} />
      </div>
    </div>
  );
}
