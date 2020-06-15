import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "tachyons";
import CardList from "./CardList";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots.js";

// cd D:\git\robofriends
//username = {robots[0].username }

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
      <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
      <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} /> */}
      <CardList robots = {robots}/>
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
