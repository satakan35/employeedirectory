import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
     {/* We render the SearchBox here and pass in necessary props */}
     <Link className="navbar-brand" to="/">
        Wikipedia Searcher
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
