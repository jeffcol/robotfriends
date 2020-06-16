import React, { Fragment } from "react";
import CardList from "./CardList";
import { robots } from "./robots.js";

const App = () => {
    return (
        <Fragment>
        <CardList robots = {robots}/>
      </Fragment>
    )
}

export default App
