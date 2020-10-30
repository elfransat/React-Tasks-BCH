import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
