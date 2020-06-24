import React, { useEffect, useRef } from "react";
import ViewProject from "../../../components/ViewProject/ViewProject";
import createAnimation from "../../../core/plugins/animation.plugin";
import "./portfolio.scss";

import blogProject from "../../../assets/images/blog-project.png";
import ecommereProject from "../../../assets/images/ecommere-project.png";

const lists_project = [
  { name: "Personal Blog", image: blogProject, source: "https://leon-sand.firebaseapp.com/", alt: "" },
  {
    name: "Ecommere Shoes",
    image: ecommereProject,
    source: "https://reactjs-xskillstore.firebaseapp.com/",
    alt: "",
  },
];

export default function Portfolio() {
  const count = useRef(0);

  useEffect(() => {
    createAnimation({
      element: ".portfolio-view__item",
      animation: "fromTop",
      duration: {
        init: 0.3,
        increase: 0.2,
      },
      timeUnit: "s",
    });
  });

  return (
    <div className="portfolio-view">
      {lists_project.map((project, index) => (
        <ViewProject
          key={index}
          name={project.name}
          className="portfolio-view__item portfolio-view--3"
          image={project.image}
          alt={project.alt}
          source={project.source}
        />
      ))}
    </div>
  );
}
