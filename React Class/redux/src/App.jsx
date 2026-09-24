import React from "react";
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./store";
import User from "./components/User";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <User />
      </Provider>
    </div>
  );
};

export default App;
