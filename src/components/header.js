import React from "react";
import about from "./about";
import Footer from "./footer";
import main from "./main";
import {
  Route,
  Link,
  BrowserRouter as Router,
} from '../../node_modules/react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/footer">Footer</Link>
        <Link to="/main">Main</Link>
      </ul>
      {/* <Route exact path="/" component={App} /> */}
      <Route path="/main" component={main} />
      <Route path="/footer" component={Footer} />
      <Route path="/about" component={about} />
    </div>
  );
};

export default Header;
