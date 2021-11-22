import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import about from "./components/about";
import main from "./components/main";
import Header from "./components/header";
import {
  Route,
  Link,
  BrowserRouter as Router,
} from "../node_modules/react-router-dom";

const myrouter = (
  <Router>
    <div>
      <ul>
        <Link to="/App">App</Link>
        <Link to="/main">Home</Link>
        <Link to="/Header">header</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/main">main</Link> */}
      </ul>
      <ul>
        <Route path="/App" component={App} />
        <Route path="/main" component={main} />
        <Route path="/about" component={about} />
        <Route path="/header" component={Header} />
      </ul>
    </div>
  </Router>
);

ReactDOM.render(myrouter, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
