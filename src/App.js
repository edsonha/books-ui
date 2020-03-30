import React, { Component } from "react";
import axios from "axios";
import Table from "./components/BookTable";
import ActionMenu from "./components/ActionMenu";
import InputConsole from "./components/InputConsole";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
      action: "post",
      bookTitle: "",
      bookAuthor: "",
      errorMessage: ""
    };
  }

  componentDidMount() {
    this.dataFetcher();
  }

  dataFetcher = () => {
    axios.get("http://localhost:3001/books").then(
      res => {
        this.setState({
          bookData: res.data
        });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  };

  handleSelectAction = event => {
    this.setState({ action: event.target.value });
  };

  handleInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSendButtonClick = async () => {
    const { bookTitle, bookAuthor, action } = this.state;
    await axios[action]("http://localhost:3001/books", {
      title: bookTitle,
      author: bookAuthor
    }).then(
      res => {
        this.dataFetcher();
      },
      err => {
        console.log(err.message);
      }
    );
  };

  render() {
    const { bookData, errorMessage, bookTitle, bookAuthor } = this.state;
    return (
      <div>
        <h1 className="center">Hello World from Library Book App!</h1>
        <ActionMenu handleSelectAction={this.handleSelectAction} />
        <InputConsole
          handleSendButtonClick={this.handleSendButtonClick}
          handleInputChange={this.handleInputChange}
          bookTitle={bookTitle}
          bookAuthor={bookAuthor}
        />
        <Table bookData={bookData} />
        {errorMessage ? (
          <h1 className="center" data-testid="error-message">
            {errorMessage}
          </h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
