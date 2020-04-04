import React from "react";

const marginSpacing = { margin: "10px 10px 10px 10px" };

const InputConsole = ({
  handleSendButtonClick,
  handleInputChange,
  bookId,
  bookTitle,
  bookAuthor,
  action,
}) => {
  return (
    <div style={marginSpacing}>
      <label style={marginSpacing}>ID</label>
      <input
        disabled={action === "post" ? true : false}
        type="search"
        placeholder="Enter Book ID"
        onChange={(event) => handleInputChange("bookId", event)}
        value={bookId}
      />
      <label style={marginSpacing}>Book Title</label>
      <input
        disabled={action === "delete" || action === "get" ? true : false}
        type="search"
        placeholder="Enter Book Title"
        onChange={(event) => handleInputChange("bookTitle", event)}
        value={bookTitle}
      />
      <label style={marginSpacing}>Book Author</label>
      <input
        disabled={action === "delete" || action === "get" ? true : false}
        type="search"
        placeholder="Enter Book Author"
        onChange={(event) => handleInputChange("bookAuthor", event)}
        value={bookAuthor}
      />
      <button type="button" onClick={handleSendButtonClick}>
        SEND
      </button>
    </div>
  );
};

export default InputConsole;
