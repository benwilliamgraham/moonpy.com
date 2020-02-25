import React, { Component } from "react";

class Download extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <title>Download | Moonpy</title>

        <h1>Download Moonpy</h1>

        <div style={{ width: "66.6%" }}>
          <p>
            Moonpy is offered in two flavors, <b>personal</b> and{" "}
            <b>enterprise</b>.
          </p>
          <p>
            For personal or academic purposes, Moonpy's free <b>personal</b>{" "}
            version is available. It is fully-functional, however does not
            permit for the generated code or binaries to be used outside of
            personal or academic contexts. Online issue reporting is provided
            through Moonpy's <b>GitHub</b>, however live support is not offered.
          </p>
          <p>
            For commercial projects, Moonpy's $50/month <b>enterprise</b>{" "}
            license is required. It allows the use of all code and binaries
            produced by Moonpy to be used for any purpose. Along with
            unrestricted access to generated works, the license guarantees live
            customer support.
          </p>
          <p>For clarification, consult the chart below:</p>
        </div>

        <table className="outline" style={{ margin: "20px" }}>
          <thead>
            <tr>
              <th></th>
              <th style={{ padding: "0px 30px" }}>Personal</th>
              <th style={{ padding: "0px 30px" }}>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: "Python compilation", pHas: true, eHas: true },
              { key: "Error reporting", pHas: true, eHas: true },
              { key: "Personal use", pHas: true, eHas: true },
              { key: "Academic use", pHas: true, eHas: true },
              { key: "Commercial use", pHas: false, eHas: true },
              { key: "Live customer support", pHas: false, eHas: true }
            ].map((comp, i) => (
              <tr key={i} className="hover">
                <td style={{ textAlign: "right" }}>{comp.key}</td>
                <td style={{ textAlign: "center" }}>{comp.pHas ? "✓" : ""}</td>
                <td style={{ textAlign: "center" }}>{comp.eHas ? "✓" : ""}</td>
              </tr>
            ))}
            <tr className="hover">
              <td style={{ textAlign: "right" }}>Price</td>
              <td style={{ textAlign: "center" }}>free</td>
              <td style={{ textAlign: "center" }}>$50/month</td>
            </tr>
          </tbody>
          {/* <tfoot>
            <tr>
              <td></td>
              <td>
                <button
                  className="button highlight"
                  onClick={() => alert("Coming soon")}
                >
                  Download Moonpy Personal
                </button>
              </td>
              <td>
                <button
                  className="button highlight"
                  onClick={() => alert("Coming soon")}
                >
                  Purchase Moonpy Enterprise
                </button>
              </td>
            </tr>
          </tfoot> */}
        </table>

        <p>
          After you've picked the right version for you, proceed to download:
        </p>
        <div>
          <button
            className="button highlight"
            style={{ margin: "0px 10px" }}
            onClick={() => alert("Coming soon")}
          >
            Download Moonpy Personal
          </button>
          <button
            className="button highlight"
            style={{ margin: "0px 10px" }}
            onClick={() => alert("Coming soon")}
          >
            Purchase Moonpy Enterprise
          </button>
        </div>
      </div>
    );
  }
}

export default Download;
