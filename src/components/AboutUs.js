import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <title>About us | Moonpy</title>

        <h1 style={{ textAlign: "center" }}>About us</h1>

        <p>
          Moonpy's mission is to allow for rapid code development without
          sacrificing performance. Using cutting-edge compiler technology to
          push the Python programming language to its limits, Moonpy saves time,
          money, and processing power.
        </p>

        <h2 style={{ textAlign: "center" }}>Our team</h2>

        <div class="outline" style={{ display: "flex" }}>
          <div style={{ padding: "10px 20px" }}>
            <img
              src="images/Alice Lai.jpeg"
              alt="Alice Lai"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <h3>Alice Lai</h3>
            <h4>github.com/allai5</h4>
            Alice Lai is a Sophomore in Electrical and Computer Engineering at
            Carnegie Mellon University. Having worked on machine learning
            projects for autonomous systems, she believes that being able to
            improve upon Python’s poor performance as a programming language
            will revolutionize the very field itself, as Python is the de facto
            language of the machine learning world. She is looking forward to
            researching and further developing the compiler and can’t wait to
            see where Moonpy goes.
          </div>
        </div>

        <div class="outline" style={{ display: "flex" }}>
          <div>
            <h3 style={{ textAlign: "right" }}>Ben Graham</h3>
            <h4 style={{ textAlign: "right" }}>github.com/benwilliamgraham</h4>
            Benjamin Graham, the founder of Moonpy, is a Sophomore in Electrical
            and Computer Engineering at Carnegie Mellon University. After making
            a discovery that could be used to compile dynamic, non-deterministic
            code while working on another project, he realized the application
            for Python. For the past year, Ben has spent his free time working
            on both the technological and business aspects of the Moonpy, and he
            can't wait to share his technology with the world.
          </div>
          <div style={{ padding: "10px 20px" }}>
            <img
              src="images/Ben Graham.jpeg"
              alt="Ben Graham"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
