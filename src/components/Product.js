import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <title>Product | Moonpy</title>
        <h2 style={{ textAlign: "center" }}>Why Moonpy?</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "auto",
            maxWidth: "800px"
          }}
        >
          {[
            {
              attr: "Fast",
              img: "images/fast.svg",
              desc: "Up to 300+ times speedup compared to CPython"
            },
            {
              attr: "Low Overhead",
              img: "images/low overhead.svg",
              desc: "Pay only for what you use; no interpreter necessary"
            },
            {
              attr: "Reliable",
              img: "images/reliable.svg",
              desc: "Eliminate runtime type and attribute errors"
            },
            {
              attr: "Multiplatform",
              img: "images/multiplatform.svg",
              desc: "Run anywhere, even in the browser"
            }
          ].map((reason, i) => (
            <div
              key={i}
              className="outline"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                padding: "30px",
                margin: "10px",
                textAlign: "center"
              }}
            >
              <h3 style={{ textAlign: "center" }}>{reason.attr}</h3>
              <img
                src={reason.img}
                alt={reason.attr}
                style={{ width: "150px", margin: "auto" }}
              />
              {reason.desc}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
