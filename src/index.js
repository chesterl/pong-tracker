import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import reducers from "./reducers";
import "./index.css";

const store = createStore(reducers);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById("root")
);
