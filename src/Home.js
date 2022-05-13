import React from "react";
import "./home.css";

const Home = () => {
  const width = window.innerWidth;

  return (
    <>
      <section className="home" id="home">
        <div className="home_text">
          <h1 className="title">The coffee house</h1>
          <p className="caption">we bean at it.</p>
        </div>
        {width > 792 && (
          <div className="thumbs">
            <div className="about_thumb">
              <img src="./thumbnails/about_thumb.jpg" alt="" />
              <div className="overlay">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt ex ducimus, dolor sit amet consectetur porro itaque.
                  Dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="locations_thumb">
              <img src="./thumbnails/locations_thumb.jpg" alt="" />
              <div className="overlay">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt ex ducimus, dolor sit amet consectetur porro itaque.
                  Dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="brews_thumb">
              <img src="./thumbnails/brews_thumb.jpg" alt="" />
              <div className="overlay">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt ex ducimus, dolor sit amet consectetur porro itaque.
                  Dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
