import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
//import PlusMain from "./plusNumber/PlusMain_01";
//import PlusMain from "./plusNumber/PlusMain_02";
//import PlusMain from "./plusNumber/PlusMain_03";
import PlusMain from "./plusNumber/PlusMain_04";
import LayoutMain from "./layout/LayoutMain_01";
import LayoutBody from "./layout/LayoutBody";

import * as serviceWorker from "./serviceWorker";

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <LayoutMain name="LayoutMain" />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
