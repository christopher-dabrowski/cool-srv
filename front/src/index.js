/* global process */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./components/reducers";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

const api = "http://localhost:8080";

const middleware = [thunk.withExtraArgument(api)];

const enchncers = process.env.NODE_ENV === "production" ?
  applyMiddleware(...middleware) : composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(rootReducer, enchncers);

console.log(process.env.NODE_ENV);
console.log(process.env.DEBUG);
console.log(process.env.DEBUG == "true");


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
