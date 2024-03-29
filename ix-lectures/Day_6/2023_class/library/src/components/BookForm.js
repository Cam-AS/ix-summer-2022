import React, { useState, useEffect } from 'react';
import { Book } from '../models/book';

export default function BookForm(props) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');

  // React hook that runs a function anytime the given variable/object changes
  useEffect(() => {
    if (props.book) {
      setTitle(props.book.title);
      setAuthor(props.book.author);
      setIsbn(props.book.isbn);
    }
  }, [props.book]);

  function onBookFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    let book = new Book(title, author, isbn);
    props.onBookCreated(book);
    clearInputs();
  }

  function isValid() {
    return title !== '' && author !== '' && isbn !== '';
  }

  function clearInputs() {
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  return (
    <div>
      <h1>Library</h1>

      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>

        <div className="mb-3">
          <label className="form-label">#ISBN</label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          ></input>
        </div>

        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.book ? 'Update Book' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
}
