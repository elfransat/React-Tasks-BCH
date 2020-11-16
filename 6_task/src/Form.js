import App from "./App";
import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <div>
        <label>
          First Name
          <input type="text" id="firstName" onChange={this.handleChange} />
        </label>
        <label>
          Last Name
          <input type="text" id="lastName" onChange={this.handleChange} />
        </label>
        <label>
          Phone Number
          <input type="number" id="number" onChange={this.handleChange} />
        </label>
        <label>
          <select>
            <option value="Programmer">Programmer</option>
            <option value="Designer">Designer</option>
            <option value="Scrum Master">Scrum Master</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Message:
          <textarea id="textArea" onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default Form;
