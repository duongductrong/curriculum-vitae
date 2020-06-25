import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import TextEffect from "../../../components/TextEffect/TextEffect";
import Button from "../../../components/Button/Button";

import createAnimation from "../../../core/plugins/animation.plugin";

import "./home.scss";

const Home: FC = () => {

  useEffect(() => {

    // animation logo
    const animations = [
      { element: "#brand-0", animation: "fromLeft", duration: { init: 1000 } },
      { element: "#brand-1", animation: "fromTop", duration: { init: 1000 } },
      { element: "#brand-2", animation: "fromBottom", duration: { init: 2000 } },
      { element: "#brand-3", animation: "fromRight", duration: { init: 2300 } },
      { element: "#brand-4", animation: "fromRight", duration: { init: 1000 } },
      { element: ".home__banners__intro", animation: "fromLeft", duration: { init: 200, increase: 150 } },
      { element: "#description-role", animation: "fromLeft", duration: { init: 1200 } },
      { element: "#contact-me-btn", animation: "fromLeft", duration: { init: 2000 } },
    ]

    animations.forEach(animate => {
      createAnimation({
        element: animate.element,
        animation: animate.animation,
        duration: animate.duration,
        timeUnit: "ms"
      })
    })
    
  }, []);

  return (
    <div className="home">
      <div className="home__banners">
        <h1 className="home__banners__intro home--mauto home--flarge">
          {<TextEffect text="Hi," />}
        </h1>
        <h1 className="home__banners__intro home--mauto home--flarge">
          {<TextEffect text="I'm" />} {<TextEffect text="Trọng" />}
        </h1>
        <h1 className="home__banners__intro home--mauto home--flarge">
          {<TextEffect text="Web" />} {<TextEffect text="Developer." />}
        </h1>

        <span id="description-role" className="home__smalltxt">
          Frontend Developer / React / Angular / Vue
        </span>

        <div className="home__contacts">
          <Link to="/curriculum-vitae/contact">
            <Button id="contact-me-btn" component="button">Contact me</Button>
          </Link>
        </div>
      </div>
      <div className="home__description">
        <span className="home__description__text">
          {"_Lio_".split("").map((item, index) => (
            <span id={`brand-${index}`} key={index}>{item}</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Home;
