import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Brews from "./Brews";
import Contact from "./Contact";
import Locations from "./Locations";
import Footer from "./Footer";
import Login from "./Login";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Error from "./Error";
import Cart from "./Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useGlobalContext } from "./context";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KFz22InQTBgJmNnOJFA0eb8hTTb8sgGom1CNt0kRBdhkhLC0cJa4LqBB7wvqhVZ7nc2Lz9vf0r4XGcMb5Ubz5AQ0095wgpC69"
);

function App() {
  const { setUser } = useGlobalContext();

  // Keep track of user
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log("USER: ", authUser);
      if (authUser) {
        // user just logged in or user was logged in
        setUser(authUser);
      } else {
        // user is not loggrd in
        setUser(null);
      }
    });
  }, []);

  return (
    <Router>
      <Navbar className="navbar" />
      <Switch>
        <Route exact path="/">
          <Home />
          <About />
          <Brews />
          <Contact />
          <Locations />
          <Cart />
          <Footer />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/checkout">
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
