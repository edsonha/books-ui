import React from "react";

const Table = ({ bookData }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Book Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {bookData &&
          bookData.map(book => {
            return (
              <tr key={book._id} data-testid="book-table-row">
                <td>{book._id}</td>
                <td data-testid="book-title-info">{book.title}</td>
                <td data-testid="book-author-info">{book.author}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
