import React, { Component } from "react";

export default class File1 extends Component {
  constructor() {
    super();
    this.state = {
      username: "TOM",
      age: 20,
    };
  }
  changeStudentName = () => {
    this.setState({ username: "Jerry", age: 12 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <h1>{this.state.age}</h1>
        <button
          onClick={this.changeStudentName}
          className="bg-blue-700 p-1.5 rounded-2xl text-white"
        >
          Change
        </button>
      </div>
    );
  }
}
