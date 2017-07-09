import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { createStore } from "redux";
import reducers from "./reducers";
import "./index.css";

const store = createStore(reducers);

ReactDOM.render(
  <AppContainer store={store}/>,
  document.getElementById("root")
);
