import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
