import React, { useState } from "react";
import { useGlobalContext } from "./context";
import Person from "@material-ui/icons/Person";
import CartIcon from "@material-ui/icons/ShoppingCart";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import "./navbar.css";

const Navbar = () => {
  const { numOfItems, user } = useGlobalContext();
  const [showLinks, setShowLinks] = useState(false);
  const history = useHistory();

  const changeCartColor = (color, elementId1, elementId2) => {
    document.getElementById(elementId1).style.fill = color;
    document.getElementById(elementId2).style.backgroundColor = color;
  };

  const toggleNav = () => {
    setShowLinks(!showLinks);
  };

  const closeNavLinks = () => {
    toggleNav();
  };

  const handleClick = () => {
    if (user) {
      signOut(auth);
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <nav>
        <div className="nav__logo">the coffee house</div>
        <div className="nav__smallerScreenCart">
          <a href="/#cart">
            <CartIcon className="nav__basketIcon" />
            <div className="p">
              <p>{numOfItems}</p>
            </div>
          </a>
        </div>
        <div className="nav__smallerScreenLogin" onClick={handleClick}>
          <Person className="nav__loginIcon" />
          <p>{user ? "logged in" : "logged out"}</p>
        </div>
        <div className="toggle-btn" onClick={toggleNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={showLinks ? "nav__links active" : "nav__links"}>
          <ul>
            <li onClick={closeNavLinks}>
              <a href="/#top">home</a>
            </li>
            <li onClick={closeNavLinks}>
              <a href="/#about">about</a>
            </li>
            <li onClick={closeNavLinks}>
              <a href="/#brews">brews</a>
            </li>
            <li onClick={closeNavLinks}>
              <a href="/#contact">contact</a>
            </li>
            <li onClick={closeNavLinks}>
              <a href="/#locations">locations</a>
            </li>
            <li id="navLinks__cart" onClick={closeNavLinks}>
              <a href="/#cart">
                <div
                  className="cartIcon"
                  onMouseOver={() =>
                    changeCartColor("rgba(171, 104, 50, 0.98)", "svg", "amt")
                  }
                  onMouseOut={() => changeCartColor("#352727", "svg", "amt")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="svg"
                  >
                    <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                  </svg>
                  <div className="amount-container" id="amt">
                    <p className="total-amount">{numOfItems}</p>
                  </div>
                </div>
              </a>
            </li>
            <li id="login-btn">
              <button className="btn" onClick={handleClick}>
                {user ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
