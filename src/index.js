import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import Thumbnail from "./components/Thumbnail";
import Well from "./components/Well";
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
  Button,
  TabNav,
  Dropdown,
  Alert,
  PageNav,
  Card,
  ButtonGroup
};

ReactDOM.render(<App />, document.getElementById("root"));
