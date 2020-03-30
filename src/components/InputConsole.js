import React from "react";

const marginSpacing = { margin: "10px 10px 10px 10px" };

const InputConsole = ({
  handleSendButtonClick,
  handleInputChange,
  bookTitle,
  bookAuthor
}) => {
  return (
    <div style={marginSpacing}>
      <label style={marginSpacing}>ID</label>
      <input type="search" placeholder="Enter Book ID" />
      <label style={marginSpacing}>Book Title</label>
      <input
        type="search"
        placeholder="Enter Book Title"
        onChange={event => handleInputChange("bookTitle", event)}
        value={bookTitle}
      />
      <label style={marginSpacing}>Book Author</label>
      <input
        type="search"
        placeholder="Enter Book Author"
        onChange={event => handleInputChange("bookAuthor", event)}
        value={bookAuthor}
      />
      <button type="button" onClick={handleSendButtonClick}>
        SEND
      </button>
    </div>
  );
};

export default InputConsole;
