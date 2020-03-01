import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <title>Home | Moonpy</title>
        <img
          alt="moonpy"
          src="images/moonpy.svg"
          style={{ display: "block", margin: "auto" }}
        />
        <h2 style={{ textAlign: "center" }}>Python like never before</h2>

        <hr />

        <h3>
          Moonpy is a static compiler for Python that is looking to
          revolutionize the way code is developed.
        </h3>

        <p>
          It uses state-of-the-art technology to convert Python code into a
          machine-level binary that is capable of running up to 300+ times
          faster than its interpreted equivalent without sacrificing any of what
          makes Python so incredible.
        </p>

        <p>
          If that wasn't enough, running a program using Moonpy uses an average
          of 38% less memory and eliminates the need for a clunky interpreter.
        </p>

        <p>
          Additionally, the static analysis done by Moonpy is able to locate all
          attribute and type errors in a program, which are constant nuisances
          of Python programmers.
        </p>
      </div>
    );
  }
}

export default Home;
