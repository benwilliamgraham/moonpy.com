import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          margin: "auto"
        }}
      >
        <NavLink to="/">
          <img
            src="images/moonpy.svg"
            style={{
              height: "2em"
            }}
            alt="moonpy"
          />
        </NavLink>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <NavLink className="button" to="/product">
            Product
          </NavLink>

          <NavLink className="button" to="/about-us">
            About us
          </NavLink>

          <NavLink className="button" to="/contact">
            Contact
          </NavLink>

          <NavLink className="button highlight" to="/download" id="download">
            Download
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
