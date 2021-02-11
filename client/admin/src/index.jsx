import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
console.log("test.. test")


ReactDOM.render(
  <BrowserRouter basename="/admin">

   <App />
  </BrowserRouter>,
  document.getElementById("root")
);