import React from "react";
import { brews } from "./data";
import { useGlobalContext } from "./context";

const Brews = () => {
  const { addItem } = useGlobalContext();

  return (
    <section className="brews">
      <div className="section-title">
        <h1>brews</h1>
        <div className="underline"></div>
      </div>
      <div className="locations-center">
        {brews.map((item) => {
          const { id, name, price, image } = item;
          return (
            <article className="single-location" key={id}>
              <div className="location-card">
                <img
                  src={image}
                  alt={name}
                  className="location-image brews-image"
                />
                <a href="#">
                  <div className="location-footer">
                    <div className="name-price">
                      <h3>{name}</h3>
                      <p>...R{price}/kg</p>
                    </div>
                    <button
                      className="btn brews-btn"
                      onClick={() => addItem(item)}
                    >
                      add to cart
                    </button>
                  </div>
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Brews;
