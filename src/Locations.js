import React from "react";
import { locations } from "./data";
import "./locations.css";

const Locations = () => {
  return (
    <section className="locations" id="locations">
      <div className="section-title">
        {/* <div className="underline underline-top"></div> */}
        <h1>locations</h1>
        <div className="underline"></div>
      </div>
      <div className="locations-center">
        {locations.map((item) => {
          const { id, location, address, image } = item;
          return (
            <article className="single-location" key={id}>
              <div className="location-card">
                <img src={image} alt={location} className="location-image" />
                <a href="#">
                  <div className="location-footer">
                    <h2>{location}</h2>
                    <p>{address}</p>
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

export default Locations;
