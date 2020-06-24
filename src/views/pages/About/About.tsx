import React, { FC, useEffect } from "react";
import TextEffect from "../../../components/TextEffect/TextEffect";
import "./about.scss";

import Avt from "../../../assets/images/avt.jpg";
import Contributions from "./Contributions";
import createAnimation from "../../../core/plugins/animation.plugin";

const About: FC<any> = () => {

  useEffect(() => {
    const animations = [
      { element: ".about__left__title", animation: "fromTop", duration: { init: 500 } },
      { element: ".about__left__description", animation: "fromLeft", duration: { init: 1000 } },
      { element: ".about__left__description__social", animation: "fromRight", duration: { init: 400, increase: 500 } },
      { element: "#contribution-git", animation: "fromBottom", duration: { init: 1400 } },
      { element: ".about__right__avatar", animation: "fromRight", duration: { init: 1200 } }
    ]

    animations.forEach((animate) => {
      createAnimation({
        element: animate.element,
        animation: animate.animation,
        duration: animate.duration,
        timeUnit: "ms"
      })
    })
  }, []);

  return (
    <div className="about">
      <div className="about__left">
        <h1 className="about__left__title about--flarge">
          {<TextEffect text="About me" />}
        </h1>

        <p className="about__left__description">
          Hello everyone, my fullname is Duong Duc Trong.
          <br /> <br /> I am currently pursuing my goal of a web programmer. I
          have experience with language JS and its technology <br /> <br />I can
          working with library <b>ReactJS / Vuejs and Framework Angular</b>
          <br /> <br /> <br />
          <p className="about__left__description__social"><b>Github: </b> <i><a style={{color: "white"}} target="__blank" href="https://github.com/duongductrong">github.com/duongductrong</a></i> <br/></p>
          <p className="about__left__description__social"><b>Facebook: </b> <i><a style={{color: "white"}} target="__blank" href="https://www.facebook.com/trong.duong.77398">fb/duongductrong</a></i> <br/></p>
          <p className="about__left__description__social"><b>LinkedIn: </b> <i><a style={{color: "white"}} target="__blank" href="https://www.linkedin.com/in/duongductrong/">linkedin/duongductrong</a></i></p>
        </p>

        <div id="contribution-git" className="about__left__contributions-git">
          {/* <iframe src="https://github.com/users/duongductrong/contributions"></iframe> */}
          <Contributions />
        </div>
      </div>
      <div className="about__right">
        <img className="about__right__avatar" src={Avt} alt="" />
      </div>
    </div>
  );
};

export default About;
