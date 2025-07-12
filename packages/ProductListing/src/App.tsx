import React from "react";
import "./App.css";
import ProductList from "./productList";
import { Provider, useDispatch } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  // console.log(dispatch, "dispatch");
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};

export default App;
