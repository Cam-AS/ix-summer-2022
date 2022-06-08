import React from 'react';

export default function BookTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <i onClick={() => props.removeBook(book)} className="bi bi-trash"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
