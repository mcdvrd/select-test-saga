import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./js/store/index";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#0078B3',
    },
    secondary: {
      main: '#003B71',
    }
  }
});


render(
    <Provider store={store}>
      <MuiThemeProvider theme={myTheme}>
      <App />
      </MuiThemeProvider>
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
  );