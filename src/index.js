import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./js/store/index";

render(
    <Provider store={store}>
      <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
  );