import React from "react";
import Home from "./Home";
import About from "./About";
import Locations from "./Locations";
import Brews from "./Brews";
import Error from "./Error";
import CartContainer from "./CartContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "./Navbar";
// import Locations from "./Locations";
// items

function App() {
  return (
    <Router>
      <Navbar className="navbar" />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/brews">
          <Brews />
        </Route>
        <Route path="/cart">
          <CartContainer />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>

    // <>
    //   {/* <Navbar className="navbar" /> */}
    //   {/* <Home /> */}
    //   {/* <About /> */}
    //   {/* <Locations /> */}
    //   {/* <Brews /> */}
    //   {/* <Error /> */}
    // </>
  );
}

export default App;
