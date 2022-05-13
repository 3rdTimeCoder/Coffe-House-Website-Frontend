import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Navbar className="navbar" /> */}
      <section className="home">
        <h1 className="title">The coffee house</h1>
        <p className="caption">we bean at it.</p>
        <div className="explore-btns">
          <Link to="/about">
            <button className="explore-btn btn">about us</button>
          </Link>
          <Link to="/locations">
            <button className="explore-btn btn">locations</button>
          </Link>
          <Link to="/brews">
            <button className="explore-btn btn">brews</button>
          </Link>
          <Link to="/cart">
            <button className="explore-btn btn">Cart</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
