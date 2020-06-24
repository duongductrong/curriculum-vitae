import React, { useEffect } from "react";
import TextEffect from "../../../components/TextEffect/TextEffect";
import BlockProgress from "./components/BlockProgress";

import "./skills.scss";
import SpinnerProgress from "../../../components/SpinnerProgress/SpinnerProgress";
import createAnimation from "../../../core/plugins/animation.plugin";

const MY_SKILL_DEFINE = [
  { name: "HTML / HTML5", progress: 80 },
  { name: "CSS / CSS3 / SASS", progress: 70 },
  { name: "JavaScript / Typescript", progress: 60 },
  { name: "ReactJS / Redux", progress: 60 },
  { name: "Vuejs", progress: 45 },
  { name: "Angular 9", progress: 45 },
  { name: "English for reading document", progress: 35 },
];

function Skills() {

  useEffect(() => {
    // animation for skill language using js/ts module
    createAnimation({
      element: ".skills__show",
      animation: "fromRight",
      duration: {
        init: 1,
        increase: 0.2,
      },
      timeUnit: "s"
    })

    // other skill animation
    createAnimation({
      element: ".skills__right__box__skill",
      animation: "fromRight",
      duration: {
        init: 1,
        increase: 0.5,
      },
      timeUnit: "s"
    })
  }, []);

  return (
    <div className="skills">
      <div className="skills__left">
        <h1 className="skills__left__title skills--flarge">
          {<TextEffect color="green" text="About_Skills" />}
        </h1>

        <p className="skills__left__description">
          <i>
            I am a very dedicated and inspired individual who trained myself to
            be a front-end developer. <br />
            <br />I have had experience with several frameworks/libraries such
            as Angular, ReactJS, VueJS. Since most of my projects are made with
            ReactJS, I am very confident with it.
          </i>
        </p>
      </div>
      <div className="skills__right">
        <h1 className="skills__right__language">Language Programming</h1>
        <div>
          {MY_SKILL_DEFINE.map((skill, index) => (
            <BlockProgress
              key={index}
              name={skill.name}
              progress={skill.progress}
            />
          ))}
          <br />
          <h1 className="skills__right__other">Others Skill</h1>
          <div className="skills__right__box">
            <SpinnerProgress className="skills__right__box__skill">
              <b>Git</b>
            </SpinnerProgress>
            <SpinnerProgress className="skills__right__box__skill">
              <b>Teamwork</b>
            </SpinnerProgress>
            <SpinnerProgress className="skills__right__box__skill">
              <b>Restful API</b>
            </SpinnerProgress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
