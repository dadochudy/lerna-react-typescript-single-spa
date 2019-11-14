import React from "react";
import { navigateToUrl } from "single-spa";
import "./index.css";

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a
        href="/"
        onClick={navigateToUrl}
        className="brand
      "
      >
        single-spa
      </a>
      <ul id="nav-mobile">
        <li>
          <a href="/app1" onClick={navigateToUrl}>
            app1
          </a>
        </li>
        <li>
          <a href="/app2" onClick={navigateToUrl}>
            app2
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
