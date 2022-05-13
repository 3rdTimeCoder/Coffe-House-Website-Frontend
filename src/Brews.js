import React from "react";
import { brews } from "./data";
import { useGlobalContext } from "./context";
import "./brews.css";

const Brews = () => {
  const { addItem } = useGlobalContext();

  return (
    <section className="brews" id="brews">
      <div className="section-title">
        <h1>brews</h1>
        <div className="underline"></div>
      </div>
      <div className="brews__center">
        {brews.map((item) => {
          const { id, name, price, image, desc, kg } = item;
          return (
            <article className="brews__card" key={id}>
              <div className="brews__cardLeft">
                <img src={image} alt={name} className="brews__image" />
              </div>
              <div className="brews__cardRight">
                <div className="brew__cardRight-top">
                  <h2>{name}</h2>
                  <p>{desc}</p>
                </div>
                <div className="brews__cardRight-bottom">
                  <div>
                    <p>currency</p>
                    <h3>USD</h3>
                  </div>
                  <div>
                    <p>price</p>
                    <h3>{price}</h3>
                  </div>
                  <div>
                    <p>kilograms</p>
                    <h3>{kg}</h3>
                  </div>
                </div>
                <button
                  className="btns brews__cardBtn"
                  onClick={() => addItem(item)}
                >
                  add to cart
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Brews;
