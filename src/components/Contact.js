import React, { Component } from "react";

class Contact extends Component {
  handleSubmit() {}

  render() {
    return (
      <div
        id="contact"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <title>Contact | Moonpy</title>

        <h1>Contact Us</h1>

        <form
          onSubmit={() => alert("coming soon")}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            width: "66.6%"
          }}
        >
          <input className="outline" placeholder="Name" required></input>

          <input className="outline" placeholder="Email" required></input>

          <select className="outline" required defaultValue="">
            <option value="" disabled>
              Subject
            </option>
            <option value="Product inquiry">Product inquiry</option>
            <option value="Unanswered Questions">Unanswered Question</option>
            <option value="Website problem">Website problem</option>
            <option value="Other">Other</option>
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
