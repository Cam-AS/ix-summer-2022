import { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookForm from './components/BookForm';
import BookTable from './components/BookTable';

function App() {
  // Declare a new state variable
  // React hook used for managing component state
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState(null);

  function onBookCreated(book) {
    setBook(null);
    setBooks([...books, book]);
  }

  function onBookDelete(isbn) {
    setBooks(books.filter((x) => x.isbn !== isbn));
  }

  function onBookEdit(book) {
    setBook(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className="container text-center mt-5">
      <div className="card p-4">
        <BookForm book={book} onBookCreated={onBookCreated}></BookForm>
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        ></BookTable>
      </div>
    </div>
  );
}

export default App;
