// React
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// Redux
import { Provider } from "react-redux";
import store from "./redux/";

// Router
import { BrowserRouter } from "react-router-dom";

// Components
import App from "./App";

// Fonts
import "./assets/fonts/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
