import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
