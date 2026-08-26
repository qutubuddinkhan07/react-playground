import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incCount = () => {
    let count = this.state.count;
    this.setState({ count: count + 1 });
  };

  decCount = () => {
    let count = this.state.count;
    if (count > 0) {
      this.setState({ count: count - 1 });
    } else {
      alert(count + " is already 0");
    }
  };

  resCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="flex bg-mist-100/60 h-screen w-full items-center justify-center">
        <div className="h-50 w-50 rounded-2xl flex items-center flex-col justify-center gap-2 bg-pink-800/60">
          <h1 className="text-3xl font-bold font-sans">
            Count: {this.state.count}
          </h1>
          <div className="flex gap-2 w-full px-4">
            <button
              onClick={this.incCount}
              className="bg-pink-800 border-none p-2 rounded-2xl text-white cursor-pointer transition-transform duration-200 hover:scale-110 flex items-center justify-center flex-none"
            >
              +
            </button>
            <button
              onClick={this.resCount}
              className="bg-pink-800 border-none p-2 rounded-2xl text-white cursor-pointer transition-transform duration-200 hover:scale-110 grow"
            >
              Reset
            </button>
            <button
              onClick={this.decCount}
              className="bg-pink-800 border-none p-2 rounded-2xl text-white cursor-pointer transition-transform duration-200 hover:scale-110 flex items-center justify-center flex-none"
            >
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
