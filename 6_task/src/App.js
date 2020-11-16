import "./App.css";
import Form from "./Form";
import View from "./view";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      phone: null,
    };

    let handleChange = (e) => {
      console.log(e);
      this.setState({
        [e.target.id]: e.target.value,
      });
    };
  }
  render() {
    return (
      <div>
        <Form changeHandler={this.handleChange} />
        <View
          firstName={this.state.firstName}
          phone={this.state.form}
          number={this.state.number}
        />
      </div>
    );
  }
}

export default App;
