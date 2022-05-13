import React from "react";
import { Link } from "react-router-dom";
import "./error.css";

const Error = () => {
  return (
    <section className="error-page">
      <h3>Oopsie! The page requested does not exist.</h3>
      <Link to="/">
        <button className="btn error-btn">back home</button>
      </Link>
    </section>
  );
};

export default Error;
