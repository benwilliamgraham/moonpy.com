import React, { Component } from "react";

class Contact extends Component {
  handleSubmit() {}

  render() {
    return (
      <div id="contact">
        <title>Contact | Moonpy</title>

        <h1 style={{ textAlign: "center" }}>Contact Us</h1>

        <form
          onSubmit={() => alert("Coming soon")}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            width: "100%",
            margin: "auto"
          }}
        >
          <input className="outline" placeholder="Name" required></input>

          <input className="outline" placeholder="Email" required></input>

          <select className="outline" required defaultValue="">
            <option value="" disabled>
              Subject
            </option>

            {[
              "Product inquiry",
              "Unanswered question",
              "Website problem",
              "Other"
            ].map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>

          <textarea
            className="outline"
            style={{
              resize: "none",
              height: "10em"
            }}
            placeholder="Message"
          ></textarea>

          <button
            className="button highlight"
            type="submit"
            style={{
              width: "10em",
              margin: "auto"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Contact;
