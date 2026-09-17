import { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

//! --- Demonstrating Mounting Phase -----
// export default class LifeCycle extends Component {
//   constructor() {
//     super();
//     this.state = { username: "Naruto" };
//     console.log("constructor is calling");
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("static getDerivedStateFromProps is calling");
//     return null;
//   }
//   componentDidMount() {
//     console.log("componentDidMount is calling");
//   }

//   render() {
//     console.log("render is calling");
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//       </div>
//     );
//     /*
//     constructor is calling
//     static getDerivedStateFromProps is calling
//     render is calling
//     componentDidMount is calling
//     */
//   }
// }

//! ================================================
//! Demonstrating Mounting Phase and Updating Phase
// export default class LifeCycle extends Component {
//   constructor() {
//     super();
//     this.state = { username: "Naruto" };
//     console.log("constructor is calling");
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("static getDerivedStateFromProps is calling");
//     return null;
//   }
//   componentDidMount() {
//     console.log("componentDidMount is calling");
//   }

//   //! ---- Updating Phase Methods ----
//   shouldComponentUpdate(prevProp, prevState) {
//     console.log("shouldComponentUpdate is calling");
//     return true;
//   }
//   getSnapshotBeforeUpdate(prevProp, prevState) {
//     console.log("getSnapshotBeforeUpdate is calling");
//     return null;
//   }
//   componentDidUpdate(prevProp, prevState) {
//     console.log("componentDidUpdate is calling");
//   }
//   changeState = () => {
//     this.setState({ username: "John" });
//   };

//   render() {
//     console.log("render is calling");
//     return (
//       <div>
//         <h1>{this.state.username}</h1>
//         <button onClick={this.changeState}>click</button>
//       </div>
//     );
//     /*
//     ----- For first time ----------
//     constructor is calling
//     static getDerivedStateFromProps is calling
//     render is calling
//     componentDidMount is calling

//     ----- After updating state ----------
//     static getDerivedStateFromProps is calling
//     shouldComponentUpdate is calling
//     render is calling
//     getSnapshotBeforeUpdate is calling
//     componentDidUpdate is calling
//     */
//   }
// }

//! ===============================================
//! Demonstrating Mounting Phase and Updating Phase
export default class LifeCycle extends Component {
  constructor() {
    super();
    this.state = { username: "Naruto" };
    console.log("constructor is calling");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("static getDerivedStateFromProps is calling");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount is calling");
  }

  //! ---- Updating Phase Methods ----
  shouldComponentUpdate(prevProp, prevState) {
    console.log("shouldComponentUpdate is calling");
    return true;
  }
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("getSnapshotBeforeUpdate is calling");
    return null;
  }
  componentDidUpdate(prevProp, prevState) {
    console.log("componentDidUpdate is calling");
  }
  changeState = () => {
    this.setState({ username: "John" });
  };

  render() {
    console.log("render is calling");
    return (
      <div>
        <h1>{this.state.username}</h1>

        {/* //? Demonstrating Unmounting Phase  */}
        {this.state.username === "Naruto" ? <LifeCycleChild /> : <></>}

        <button onClick={this.changeState}>click</button>
      </div>
    );
    /*
    ----- For first time [PRINTED]----------
    constructor is calling
    static getDerivedStateFromProps is calling
    render is calling
    componentDidMount is calling
    
    ----- When the state is changed ----
    The child LifeCycle node is completely deleted from the DOM
    
    ----- After updating state [PRINTED]----------
    static getDerivedStateFromProps is calling
    shouldComponentUpdate is calling
    render is calling
    getSnapshotBeforeUpdate is calling
    componentWillUnmount is calling
    componentDidUpdate is calling
    */
  }
}
