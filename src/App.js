import React, { Component } from "react";
import axios from "axios";
import Table from "./components/BookTable";
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
    const { bookData } = this.state;
    return (
      <div>
        <h1 className="center">Hello World from Library Book App!</h1>
        <Table bookData={bookData} />
      </div>
    );
  }
}

export default App;
