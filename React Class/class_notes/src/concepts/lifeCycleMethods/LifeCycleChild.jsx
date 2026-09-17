import React, { Component } from "react";

export default class LifeCycleChild extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount is calling");
  }
  render() {
    return (
      <div>
        <h1>LifeCycleChild</h1>
      </div>
    );
  }
}
