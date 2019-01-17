import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Thumbnail from "./components/Thumbnail";
import Well from "./components/Well";
import PaginationButton from "./components/PaginationButton";
import TabNav from "./components/TabNav";
import Button from "./components/Button";
import ButtonGroup from "./components/ButtonGroup";
import Dropdown from "./components/Dropdown";
import Alert from "./components/Alert";
import Card from "./components/Card";
import PageNav from "./components/PageNav";

import "./styles.module.scss";
import "./index.css";

export {
  Thumbnail,
  Well,
  PaginationButton,
  Button,
  TabNav,
  Dropdown,
  Alert,
  PageNav,
  Card,
  ButtonGroup
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
