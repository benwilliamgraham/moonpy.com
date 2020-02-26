import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Download from "./components/Download";
import AboutUs from "./components/AboutUs";
import Oops from "./components/Oops";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <Navigation />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/download" component={Download} />
            <Route component={Oops} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
