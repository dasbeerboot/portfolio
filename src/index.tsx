import React from "react";
import ReactDOM from "react-dom";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "./index.scss";

ReactDOM.render(
  <>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </>,
  document.getElementById("root")
);
