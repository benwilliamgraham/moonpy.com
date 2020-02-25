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
          marginBottom: "20px"
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
            justifyContent: "space-between",
            width: "66.6%"
          }}
        >
          <NavLink className="button" to="/about">
            About
          </NavLink>
          <NavLink className="button" to="/contact">
            Contact
          </NavLink>
          <NavLink
            className="button highlight"
            to="/download"
            id="download"
            style={{ width: "10em", textAlign: "center" }}
          >
            Download
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
