import React, { useState } from 'react';

import { Book } from '../models/books';

export default function BookInputs(props) {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [isbn, setIsbn] = useState('');

  const [book, setBook] = useState({ author: '', title: '', isbn: '' });

  function handleChange(e) {
    const value = e.target.value;
    setBook({
      ...book,
      [e.target.name]: value,
    });
  }

  function onBookSubmitted(e) {
    e.preventDefault();

    if (book.title === '' || book.author === '' || book.isbn === '') {
      return;
    }

    let newBook = new Book(book.title, book.author, book.isbn);

    props.addBook(newBook);

    // setTitle('');
    // setAuthor('');
    // setIsbn('');

    setBook({
      title: '',
      author: '',
      isbn: '',
    });
  }

  return (
    <div>
      <form onSubmit={onBookSubmitted}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            value={book.title}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Add Book Title"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            name="author"
            value={book.author}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Add Book Author"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">ISBN</label>
          <input
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Add Book ISBN"
          ></input>

          <div className="text-center my-4">
            <button className="btn btn-outline-secondary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
