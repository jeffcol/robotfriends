import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import * as serviceWorker from "./serviceWorker";

// cd D:\git\robofriends
//username = {robots[0].username }

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <main className="tc">
        <App />
      </main>
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
