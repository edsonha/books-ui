import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/books").then(
      res => {
        this.setState({
          bookData: res.data
        });
      },
      err => {
        console.log(err.message);
      }
    );
  }

  render() {
    return (
      <div>
        <h1 className="center">Hello World from Library Book App!</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookData &&
              this.state.bookData.map(book => {
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
      </div>
    );
  }
}

export default App;
