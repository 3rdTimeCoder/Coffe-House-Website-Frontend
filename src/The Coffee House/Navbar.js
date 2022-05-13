import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";
// import ForumIcon from "@material-ui/icons/Forum";
import { navLinks, socialLinks } from "./data";

const Navbar = () => {
  const { numOfItems } = useGlobalContext();
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);

  useEffect(() => {
    if (showLinks) {
      linksContainerRef.current.style.transform = "scale(1)";
    } else {
      linksContainerRef.current.style.transform = "scale(0)";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <header>
          <Link to="/">
            <h2 className="logo">TCH</h2>
          </Link>
          <Link to="/cart">
            <div className="cartIcon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
              </svg>
              <div className="amount-container">
                <p className="total-amount">{numOfItems}</p>
              </div>
            </div>
          </Link>
          <div
            className="toggle-btn btn"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </div>
        </header>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links">
            {navLinks.map((navLink) => {
              const { name, icon } = navLink;
              let link = "";
              if (name === "home") {
                link = "/";
              } else {
                link = `/${name}`;
              }

              return (
                <Link to={link}>
                  <li className="link">
                    <h2>{icon}</h2>
                    <h2>{name}</h2>
                  </li>
                </Link>
              );
            })}
            <li className="link social-links">
              {socialLinks.map((item) => {
                const { icon, href } = item;
                return <a href={href}>{icon}</a>;
              })}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
